import 'dart:async';
import 'dart:ffi';

import 'package:cbl_ffi/cbl_ffi.dart';

import '../../support/utils.dart';
import '../decoder.dart';
import '../encoder.dart';
import 'collection.dart';
import 'value.dart';

class MDict extends MCollection {
  MDict()
      : _dict = null,
        _values = {},
        _length = 0,
        _valuesHasAllKeys = true;

  MDict.asCopy(MDict original, {bool? isMutable})
      : _dict = original._dict,
        _values = Map.fromEntries(
          original._values.entries
              .map((entry) => MapEntry(entry.key, entry.value.clone())),
        ),
        _length = original._length,
        _valuesHasAllKeys = original._valuesHasAllKeys,
        super.asCopy(original, isMutable: isMutable ?? original.isMutable);

  MDict.asChild(MValue slot, MCollection parent, int length, {bool? isMutable})
      :
        // ignore: cast_nullable_to_non_nullable
        _dict = slot.value!.cast(),
        _values = {},
        // ignore: cast_nullable_to_non_nullable
        _length = length,
        _valuesHasAllKeys = false,
        super.asChild(
          slot,
          parent,
          isMutable: isMutable ?? parent.hasMutableChildren,
        );

  final Pointer<FLDict>? _dict;
  final Map<String, MValue> _values;
  int _length;

  /// Whether [_values] contains all the keys of [_dict].
  bool _valuesHasAllKeys;

  int get length => _length;

  bool contains(String key) => _getValue(key).isNotEmpty;

  MValue? get(String key) {
    final value = _getValue(key);
    return value.isNotEmpty ? value : null;
  }

  void set(String key, Object? native) {
    assert(isMutable);

    mutate();
    final value = _getValue(key);
    if (value.isEmpty) {
      _length++;
    }
    value.setNative(native, this);
  }

  void remove(String key) {
    assert(isMutable);

    final value = _getValue(key);
    if (value.isNotEmpty) {
      mutate();
      value.setEmpty(this);
      _length--;
    }
  }

  void clear() {
    assert(isMutable);

    if (_length == 0) {
      return;
    }

    // Clear out all entires.
    mutate();
    for (final value in _values.values) {
      value.removeFromParent();
    }
    _values.clear();
    _length = 0;

    // Shadow all keys in _dict with empty MValue.
    if (!_valuesHasAllKeys) {
      _valuesHasAllKeys = true;
      final it = DictIterator(
        _dict!,
        keyOut: globalFLString,
        partiallyConsumable: false,
      );
      while (it.moveNext()) {
        final key =
            context!.sharedStrings.flStringToDartString(globalFLString.ref);
        _values[key] = MValue.empty();
      }
    }
  }

  @override
  FutureOr<void> performEncodeTo(FleeceEncoder encoder) {
    if (!isMutated) {
      encoder.writeValue(_dict!.cast());
    } else {
      return syncOrAsync(() sync* {
        final dictKeys = context?.dictKeys;
        encoder.beginDict(length);
        for (final entry in iterable) {
          if (dictKeys != null) {
            dictKeys.getKey(entry.key).encodeTo(encoder);
          } else {
            encoder.writeKey(entry.key);
          }
          if (entry.value.hasValue) {
            encoder.writeValue(entry.value.value!);
          } else {
            yield entry.value.encodeTo(encoder);
          }
        }
        encoder.endDict();
      }());
    }
  }

  @override
  Iterable<MValue> get values => _values.values;

  Iterable<MapEntry<String, MValue>> get iterable sync* {
    // Iterate over entries in _values.
    for (final entry in _values.entries) {
      // Empty MValues represent that the entry was removed.
      if (entry.value.isNotEmpty) {
        yield entry;
      }
    }

    // _values shadows all keys in _dict so there is no use in iterating _dict.
    if (_valuesHasAllKeys) {
      return;
    }

    // Iterate over entries in _dict.
    final dict = _dict!;
    final it = DictIterator(
      dict,
      keyOut: globalFLString,
      valueOut: globalLoadedFLValue,
      preLoad: false,
      partiallyConsumable: false,
    );
    while (it.moveNext()) {
      final key =
          context!.sharedStrings.flStringToDartString(globalFLString.ref);

      // Skip over entries which are shadowed by _values
      if (_values.containsKey(key)) {
        continue;
      }

      // Cache the value to speed up lookups later.
      final value =
          _values[key] = MValue.withValue(globalLoadedFLValue.ref.asValue);
      yield MapEntry(key, value);
    }

    _valuesHasAllKeys = true;
  }

  MValue _getValue(String key) =>
      _values[key] ??= (_loadValue(key) ?? MValue.empty())..updateParent(this);

  MValue? _loadValue(String key) {
    final dict = _dict;
    if (dict == null) {
      return null;
    }

    final flValue = context!.dictKeys!.getKey(key).getValue(dict);
    if (flValue == null) {
      return null;
    }
    return MValue.withValue(flValue);
  }
}
