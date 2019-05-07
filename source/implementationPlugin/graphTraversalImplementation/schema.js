"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.schema = schema;var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));


















var _decoratorUtility = require("@dependency/commonPattern/source/decoratorUtility.js");

function schema({ thisArg }) {var _dec, _obj;

  let self = (_dec =
  (0, _decoratorUtility.executionLevel)(), (_obj = {
    async initializeNestedUnit({
      nestedUnitKey,
      additionalChildNestedUnit = [],
      pathPointerKey = null,
      parent = this,
      argument = {} })
    {

      if (this.executionLevel == 'topLevel') {
        nestedUnitInstance.requestOption = this.portAppInstance.context.request.body;
      } else {
        let fieldArray = parent.requestOption.field;
        if (fieldArray && fieldArray.length == 0 || !fieldArray) {
          nestedUnitInstance.requestOption = {};
        } else if (fieldArray) {
          nestedUnitInstance.requestOption = fieldArray.find(field => field.fieldName == unitInstance.fieldName);
        }
      }


      if (!nestedUnitInstance.requestOption) return;
      nestedUnitInstance.dataset = await unitInstance.resolveDataset({ parentResult: argument.dataset || parent.dataset });

      if (this.portAppInstance.context.request.body.schemaMode == "nonStrict") {

      } else {
        assert.notEqual(nestedUnitInstance.dataset, undefined, `• returned dataset cannot be undefined for fieldName: ${unitInstance.fieldName}.`);
      }



      let datasetHandling;
      if (Array.isArray(nestedUnitInstance.dataset) && nestedUnitInstance.children && nestedUnitInstance.children.length > 0) {
        datasetHandling = 'sequence';
      } else if (typeof nestedUnitInstance.dataset == 'object' && nestedUnitInstance.children && nestedUnitInstance.children.length > 0) {
        datasetHandling = 'nested';
      } else {
        datasetHandling = 'nonNested';
      }


      let object = {};
      switch (datasetHandling) {
        case 'sequence':

          let promiseArray = nestedUnitInstance.dataset.map(document => {
            let argument = {};
            argument['dataset'] = document;
            return nestedUnitInstance.loopInsertionPoint({ type: 'aggregateIntoContentArray', argument });
          });
          let subsequentDatasetArray = await Promise.all(promiseArray);
          object[unitInstance.fieldName] = subsequentDatasetArray.map((subsequentDataset, index) => {
            return this.formatDatasetOfNestedType({
              subsequentDataset,
              dataset: nestedUnitInstance.dataset[index],
              option: {
                extrafield: nestedUnitInstance.requestOption.extrafield } });


          });

          break;
        case 'nested':

          let subsequentDataset = await nestedUnitInstance.loopInsertionPoint({ type: 'aggregateIntoContentArray' });
          object[unitInstance.fieldName] = this.formatDatasetOfNestedType({
            subsequentDataset,
            dataset: nestedUnitInstance.dataset,
            option: {
              extrafield: nestedUnitInstance.requestOption.extrafield } });



          break;
        default:
        case 'nonNested':


          object[unitInstance.fieldName] = nestedUnitInstance.dataset;

          break;}




      return object;
    },

    formatDatasetOfNestedType({ subsequentDataset, dataset, option }) {
      let object = {};
      subsequentDataset.forEach(field => {
        object = Object.assign(object, field);
      });
      if (option.extrafield) {
        object = Object.assign(dataset, object);
      }
      return object;
    } }, ((0, _applyDecoratedDescriptor2.default)(_obj, "initializeNestedUnit", [_dec], Object.getOwnPropertyDescriptor(_obj, "initializeNestedUnit"), _obj)), _obj));



  Object.keys(self).forEach(function (key) {
    self[key] = self[key].bind(thisArg);
  }, {});
  return self;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9pbXBsZW1lbnRhdGlvblBsdWdpbi9ncmFwaFRyYXZlcnNhbEltcGxlbWVudGF0aW9uL3NjaGVtYS5qcyJdLCJuYW1lcyI6WyJzY2hlbWEiLCJ0aGlzQXJnIiwic2VsZiIsImluaXRpYWxpemVOZXN0ZWRVbml0IiwibmVzdGVkVW5pdEtleSIsImFkZGl0aW9uYWxDaGlsZE5lc3RlZFVuaXQiLCJwYXRoUG9pbnRlcktleSIsInBhcmVudCIsImFyZ3VtZW50IiwiZXhlY3V0aW9uTGV2ZWwiLCJuZXN0ZWRVbml0SW5zdGFuY2UiLCJyZXF1ZXN0T3B0aW9uIiwicG9ydEFwcEluc3RhbmNlIiwiY29udGV4dCIsInJlcXVlc3QiLCJib2R5IiwiZmllbGRBcnJheSIsImZpZWxkIiwibGVuZ3RoIiwiZmluZCIsImZpZWxkTmFtZSIsInVuaXRJbnN0YW5jZSIsImRhdGFzZXQiLCJyZXNvbHZlRGF0YXNldCIsInBhcmVudFJlc3VsdCIsInNjaGVtYU1vZGUiLCJhc3NlcnQiLCJub3RFcXVhbCIsInVuZGVmaW5lZCIsImRhdGFzZXRIYW5kbGluZyIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkcmVuIiwib2JqZWN0IiwicHJvbWlzZUFycmF5IiwibWFwIiwiZG9jdW1lbnQiLCJsb29wSW5zZXJ0aW9uUG9pbnQiLCJ0eXBlIiwic3Vic2VxdWVudERhdGFzZXRBcnJheSIsIlByb21pc2UiLCJhbGwiLCJzdWJzZXF1ZW50RGF0YXNldCIsImluZGV4IiwiZm9ybWF0RGF0YXNldE9mTmVzdGVkVHlwZSIsIm9wdGlvbiIsImV4dHJhZmllbGQiLCJmb3JFYWNoIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImtleSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7O0FBRU8sU0FBU0EsTUFBVCxDQUFnQixFQUFFQyxPQUFGLEVBQWhCLEVBQTZCOztBQUVoQyxNQUFJQyxJQUFJO0FBQ0gseUNBREcsVUFBRztBQUVQ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dUIsTUFBOUIsRUFBRCxFQUF5QztBQUM5RCxVQUFJWixNQUFNLEdBQUcsRUFBYjtBQUNBUyxNQUFBQSxpQkFBaUIsQ0FBQ0ssT0FBbEIsQ0FBMEI5QixLQUFLLElBQUk7QUFDL0JnQixRQUFBQSxNQUFNLEdBQUdlLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsTUFBZCxFQUFzQmhCLEtBQXRCLENBQVQ7QUFDSCxPQUZEO0FBR0EsVUFBRzRCLE1BQU0sQ0FBQ0MsVUFBVixFQUFzQjtBQUNsQmIsUUFBQUEsTUFBTSxHQUFHZSxNQUFNLENBQUNDLE1BQVAsQ0FBYzNCLE9BQWQsRUFBdUJXLE1BQXZCLENBQVQ7QUFDSDtBQUNELGFBQU9BLE1BQVA7QUFDSCxLQW5HTSxFQUFILDhKQUFSOzs7O0FBdUdBZSxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWWhELElBQVosRUFBa0I2QyxPQUFsQixDQUEwQixVQUFTSSxHQUFULEVBQWM7QUFDcENqRCxJQUFBQSxJQUFJLENBQUNpRCxHQUFELENBQUosR0FBWWpELElBQUksQ0FBQ2lELEdBQUQsQ0FBSixDQUFVQyxJQUFWLENBQWVuRCxPQUFmLENBQVo7QUFDSCxHQUZELEVBRUcsRUFGSDtBQUdBLFNBQU9DLElBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiB0eXBlIGFnZ3JlZ2F0ZUludG9Db250ZW50QXJyYXlcclxuICovXHJcbi8qIGV4bXBsZSByZXF1ZXN0IGJvZHk6IFxyXG57XHJcbiAgICBcImZpZWxkTmFtZVwiOiBcImFydGljbGVcIixcclxuICAgIFwiZmllbGRcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmaWVsZE5hbWVcIjogXCJ0aXRsZVwiLFxyXG4gICAgICAgICAgICBcImZpZWxkXCI6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmllbGROYW1lXCI6IFwicGFyYWdyYXBoXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGRcIjogW11cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgXCJzY2hlbWFNb2RlXCI6IFwibm9uU3RyaWN0XCIsIC8vIGFsbG93IGVtcHR5IGRhdGFzZXRzIGZvciBzcGVjaWZpZWQgZmllbGRzIGluIHRoZSBuZXN0ZWQgdW5pdCBzY2hlbWEuXHJcbiAgICBcImV4dHJhZmllbGRcIjogdHJ1ZSAvLyBpbmNsdWRlcyBmaWVsZHMgdGhhdCBhcmUgbm90IGV4dHJhY3RlZCB1c2luZyB0aGUgc2NoZW1hLlxyXG59ICovXHJcbmltcG9ydCB7IGFkZCwgZXhlY3V0ZSwgY29uZGl0aW9uYWwsIGV4ZWN1dGlvbkxldmVsIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZGVjb3JhdG9yVXRpbGl0eS5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2hlbWEoeyB0aGlzQXJnIH0pIHsgLy8gZnVuY3Rpb24gd3JhcHBlciB0byBzZXQgdGhpc0FyZyBvbiBpbXBsZW1lbnRhaW9uIG9iamVjdCBmdW5jdGlvbnMuXHJcblxyXG4gICAgbGV0IHNlbGYgPSB7XHJcbiAgICAgICAgQGV4ZWN1dGlvbkxldmVsKCkgICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGluaXRpYWxpemVOZXN0ZWRVbml0KHsgXHJcbiAgICAgICAgICAgIG5lc3RlZFVuaXRLZXksIFxyXG4gICAgICAgICAgICBhZGRpdGlvbmFsQ2hpbGROZXN0ZWRVbml0ID0gW10sIFxyXG4gICAgICAgICAgICBwYXRoUG9pbnRlcktleSA9IG51bGwsIFxyXG4gICAgICAgICAgICBwYXJlbnQgPSB0aGlzLFxyXG4gICAgICAgICAgICBhcmd1bWVudCA9IHt9XHJcbiAgICAgICAgfSkgeyAvLyBFbnRyeXBvaW50IEluc3RhbmNlXHJcbiAgICAgICAgICAgIC8vIGV4dHJhY3QgcmVxdWVzdCBkYXRhIGFjdGlvbiBhcmd1bWVudHMuIGFyZ3VtZW50cyBmb3IgYSBxdWVyeS9tdXRhdGlvbi9zdWJzY3JpcHRpb24uXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZXhlY3V0aW9uTGV2ZWwgPT0gJ3RvcExldmVsJykge1xyXG4gICAgICAgICAgICAgICAgbmVzdGVkVW5pdEluc3RhbmNlLnJlcXVlc3RPcHRpb24gPSB0aGlzLnBvcnRBcHBJbnN0YW5jZS5jb250ZXh0LnJlcXVlc3QuYm9keVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBjaGlsZC9uZXN0ZWRcclxuICAgICAgICAgICAgICAgIGxldCBmaWVsZEFycmF5ID0gcGFyZW50LnJlcXVlc3RPcHRpb24uZmllbGQgLy8gb2JqZWN0IGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZihmaWVsZEFycmF5ICYmIGZpZWxkQXJyYXkubGVuZ3RoID09IDAgfHwgIWZpZWxkQXJyYXkpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkVW5pdEluc3RhbmNlLnJlcXVlc3RPcHRpb24gPSB7fSAvLyBjb250aW51ZSB0byByZXNvbHZlIGRhdGFzZXQgYW5kIGFsbCBzdWJzZXF1ZW50IE5lc3RlZHVuaXRzIG9mIG5lc3RlZCBkYXRhc2V0IGluIGNhc2UgYXJlIG9iamVjdHMuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZmllbGRBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZFVuaXRJbnN0YW5jZS5yZXF1ZXN0T3B0aW9uID0gZmllbGRBcnJheS5maW5kKGZpZWxkID0+IGZpZWxkLmZpZWxkTmFtZSA9PSB1bml0SW5zdGFuY2UuZmllbGROYW1lKSAvLyB3aGVyZSBmaWVsZE5hbWVzIG1hdGNoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZpZWxkbmFtZSBleGlzdHMgaW4gdGhlIHJlcXVlc3Qgb3B0aW9uLCBpZiBub3Qgc2tpcCBuZXN0ZWQgdW5pdC5cclxuICAgICAgICAgICAgaWYoIW5lc3RlZFVuaXRJbnN0YW5jZS5yZXF1ZXN0T3B0aW9uKSByZXR1cm47IC8vIGZpZWxkTmFtZSB3YXMgbm90IHNwZWNpZmllZCBpbiB0aGUgcGFyZW50IG5lc3RlZFVuaXQsIHRoZXJlZm9yZSBza2lwIGl0cyBleGVjdXRpb25cclxuICAgICAgICAgICAgbmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXQgPSBhd2FpdCB1bml0SW5zdGFuY2UucmVzb2x2ZURhdGFzZXQoeyBwYXJlbnRSZXN1bHQ6IGFyZ3VtZW50LmRhdGFzZXQgfHwgcGFyZW50LmRhdGFzZXQgfSlcclxuICAgICAgICAgICAgLy8gVE9ETzogRml4IHJlcXVlc3RPcHRpb24gLSBpLmUuIGFib3ZlIGl0IGlzIHVzZWQgdG8gcGFzcyBcImZpZWxkXCIgb3B0aW9uIG9ubHkuXHJcbiAgICAgICAgICAgIGlmKHRoaXMucG9ydEFwcEluc3RhbmNlLmNvbnRleHQucmVxdWVzdC5ib2R5LnNjaGVtYU1vZGUgPT0gXCJub25TdHJpY3RcIikgeyAvLyBEb24ndCBlbmZvcmNlIHN0cmljdCBzY2hlbWEsIGkuZS4gYWxsIG5lc3RlZCBjaGlsZHJlbiBzaG91bGQgZXhpc3QuXHJcbiAgICAgICAgICAgICAgICAvLyBpZihuZXN0ZWRVbml0SW5zdGFuY2UuZGF0YXNldCkgbmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXQgPSBudWxsIC8vIFRPRE86IHRocm93cyBlcnJvciBhcyBuZXh0IGl0IGlzIGJlaW5nIHVzZWQuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhc3NlcnQubm90RXF1YWwobmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXQsIHVuZGVmaW5lZCwgYOKAoiByZXR1cm5lZCBkYXRhc2V0IGNhbm5vdCBiZSB1bmRlZmluZWQgZm9yIGZpZWxkTmFtZTogJHt1bml0SW5zdGFuY2UuZmllbGROYW1lfS5gKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgdHlwZSBvZiBkYXRhc2V0XHJcbiAgICAgICAgICAgIGxldCBkYXRhc2V0SGFuZGxpbmc7XHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkobmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXQpICYmIG5lc3RlZFVuaXRJbnN0YW5jZS5jaGlsZHJlbiAmJiBuZXN0ZWRVbml0SW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoID4gMCApIHsgLy8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRIYW5kbGluZyA9ICdzZXF1ZW5jZSdcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBuZXN0ZWRVbml0SW5zdGFuY2UuZGF0YXNldCA9PSAnb2JqZWN0JyAmJiBuZXN0ZWRVbml0SW5zdGFuY2UuY2hpbGRyZW4gJiYgbmVzdGVkVW5pdEluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHsgLy8gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0SGFuZGxpbmcgPSAnbmVzdGVkJ1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBub24tbmVzdGVkIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0SGFuZGxpbmcgPSAnbm9uTmVzdGVkJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgYXJyYXksIG9iamVjdCwgb3Igbm9uLW5lc3RlZCB2YWx1ZVxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0ge307Ly8gZm9ybWF0dGVkIG9iamVjdCB3aXRoIHJlcXVlc3RlZCBmaWVsZHNcclxuICAgICAgICAgICAgc3dpdGNoIChkYXRhc2V0SGFuZGxpbmcpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3NlcXVlbmNlJzpcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZUFycmF5ID0gbmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXQubWFwKGRvY3VtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyZ3VtZW50ID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRbJ2RhdGFzZXQnXSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXN0ZWRVbml0SW5zdGFuY2UubG9vcEluc2VydGlvblBvaW50KHsgdHlwZTogJ2FnZ3JlZ2F0ZUludG9Db250ZW50QXJyYXknLCBhcmd1bWVudCAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJzZXF1ZW50RGF0YXNldEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycmF5KVxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFt1bml0SW5zdGFuY2UuZmllbGROYW1lXSA9IHN1YnNlcXVlbnREYXRhc2V0QXJyYXkubWFwKChzdWJzZXF1ZW50RGF0YXNldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0YXNldE9mTmVzdGVkVHlwZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2VxdWVudERhdGFzZXQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldDogbmVzdGVkVW5pdEluc3RhbmNlLmRhdGFzZXRbaW5kZXhdLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWZpZWxkOiBuZXN0ZWRVbml0SW5zdGFuY2UucmVxdWVzdE9wdGlvbi5leHRyYWZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25lc3RlZCc6IC8vIGlmIGZpZWxkIHRyZWF0ZWQgYXMgYW4gb2JqZWN0IHdpdGggbmVzdGVkIGZpZWxkcyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YnNlcXVlbnREYXRhc2V0ID0gYXdhaXQgbmVzdGVkVW5pdEluc3RhbmNlLmxvb3BJbnNlcnRpb25Qb2ludCh7IHR5cGU6ICdhZ2dyZWdhdGVJbnRvQ29udGVudEFycmF5JyB9KSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFt1bml0SW5zdGFuY2UuZmllbGROYW1lXSA9IHRoaXMuZm9ybWF0RGF0YXNldE9mTmVzdGVkVHlwZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzZXF1ZW50RGF0YXNldCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IG5lc3RlZFVuaXRJbnN0YW5jZS5kYXRhc2V0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFmaWVsZDogbmVzdGVkVW5pdEluc3RhbmNlLnJlcXVlc3RPcHRpb24uZXh0cmFmaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICBjYXNlICdub25OZXN0ZWQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsb29waW5nIG92ZXIgbmVzdGVkIHVuaXRzIGNhbiBtYW5pcHVsYXRlIHRoZSBkYXRhIGluIGEgZGlmZmVyZW50IHdheSB0aGFuIHJlZ3VsYXIgYWdncmVnYXRpb24gaW50byBhbiBhcnJheS5cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RbdW5pdEluc3RhbmNlLmZpZWxkTmFtZV0gPSBuZXN0ZWRVbml0SW5zdGFuY2UuZGF0YXNldFxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBkZWFsIHdpdGggcmVxdWVzdGVkIGFsbCBmaWVsZHMgd2l0aG91dCB0aGUgZmllbGQgb3B0aW9uIHdoZXJlIGV4ZWN1dGlvbiBvZiBzdWJuZXN0ZWR1bml0cyBpcyByZXF1aXJlZCB0byBtYW5pcHVsYXRlIHRoZSBkYXRhLlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZvcm1hdERhdGFzZXRPZk5lc3RlZFR5cGUoeyBzdWJzZXF1ZW50RGF0YXNldCwgZGF0YXNldCwgb3B0aW9uIH0pIHtcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHt9XHJcbiAgICAgICAgICAgIHN1YnNlcXVlbnREYXRhc2V0LmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihvYmplY3QsIGZpZWxkKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihvcHRpb24uZXh0cmFmaWVsZCkgeyAvLyBleHRyYWZpZWxkIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihkYXRhc2V0LCBvYmplY3QpIC8vIG92ZXJyaWRlIHN1YnNlcXVlbnQgZmllbGRzIGFuZCBrZWVwIHVudHJhY2tlZCBmaWVsZHMuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdCAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKHNlbGYpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgc2VsZltrZXldID0gc2VsZltrZXldLmJpbmQodGhpc0FyZylcclxuICAgIH0sIHt9KVxyXG4gICAgcmV0dXJuIHNlbGZcclxufSJdfQ==