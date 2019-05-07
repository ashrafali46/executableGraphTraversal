"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.UnitFunction = UnitFunction;var _prototypeChainDebug = require("@dependency/prototypeChainDebug");
var _decoratorUtility = require("@dependency/commonPattern/source/decoratorUtility.js");
var _extendedSubclassPattern = require("@dependency/commonPattern/source/extendedSubclassPattern.js");
var _getTableDocumentQuery = require("@dependency/databaseUtility/source/query/getTableDocument.query.js");

let databasePrefix = 'middleware_';
let getDocument = {
  'Unit': (0, _getTableDocumentQuery.curried)({ databaseName: 'webappSetting', tableName: `${databasePrefix}unit` }),
  'File': (0, _getTableDocumentQuery.curried)({ databaseName: 'webappSetting', tableName: `${databasePrefix}file` }) };


function UnitFunction({ Superclass }) {var _dec, _dec2, _dec3, _class;
  let self = (_dec =
  (0, _decoratorUtility.conditional)({ decorator: _prototypeChainDebug.classDecorator, condition: process.env.SZN_DEBUG }), _dec2 =
  (0, _decoratorUtility.execute)({
    staticMethod: 'initializeStaticClass',
    args: [getDocument['Unit']] }), _dec3 =

  _extendedSubclassPattern.extendedSubclassPattern.Subclass(), _dec(_class = _dec2(_class = _dec3(_class = class
  Unit extends Superclass {
    async pupolateUnitWithFile() {
      await super.pupolateUnitWithFile({
        getDocument: getDocument['File'],
        fileKey: this.fileKey,
        extract: { destinationKey: 'file' } });

    }}) || _class) || _class) || _class);

  return self;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9pbXBsZW1lbnRhdGlvblBsdWdpbi9jbGFzc0ltcGxlbWVudGF0aW9uL21pZGRsZXdhcmUvVW5pdC5jbGFzcy5qcyJdLCJuYW1lcyI6WyJkYXRhYmFzZVByZWZpeCIsImdldERvY3VtZW50IiwiZGF0YWJhc2VOYW1lIiwidGFibGVOYW1lIiwiVW5pdEZ1bmN0aW9uIiwiU3VwZXJjbGFzcyIsInNlbGYiLCJkZWNvcmF0b3IiLCJwcm90b3R5cGVDaGFpbkRlYnVnIiwiY29uZGl0aW9uIiwicHJvY2VzcyIsImVudiIsIlNaTl9ERUJVRyIsInN0YXRpY01ldGhvZCIsImFyZ3MiLCJleHRlbmRlZFN1YmNsYXNzUGF0dGVybiIsIlN1YmNsYXNzIiwiVW5pdCIsInB1cG9sYXRlVW5pdFdpdGhGaWxlIiwiZmlsZUtleSIsImV4dHJhY3QiLCJkZXN0aW5hdGlvbktleSJdLCJtYXBwaW5ncyI6IitHQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGNBQWMsR0FBRyxhQUFyQjtBQUNBLElBQUlDLFdBQVcsR0FBRztBQUNkLFVBQVEsb0NBQXdCLEVBQUVDLFlBQVksRUFBRSxlQUFoQixFQUFpQ0MsU0FBUyxFQUFHLEdBQUVILGNBQWUsTUFBOUQsRUFBeEIsQ0FETTtBQUVkLFVBQVEsb0NBQXdCLEVBQUVFLFlBQVksRUFBRSxlQUFoQixFQUFpQ0MsU0FBUyxFQUFHLEdBQUVILGNBQWUsTUFBOUQsRUFBeEIsQ0FGTSxFQUFsQjs7O0FBS08sU0FBU0ksWUFBVCxDQUFzQixFQUFFQyxVQUFGLEVBQXRCLEVBQXNDO0FBQ3pDLE1BQUlDLElBQUk7QUFDSCxxQ0FBWSxFQUFFQyxTQUFTLEVBQUVDLG1DQUFiLEVBQWtDQyxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUF6RCxFQUFaLENBREc7QUFFSCxpQ0FBUTtBQUNMQyxJQUFBQSxZQUFZLEVBQUUsdUJBRFQ7QUFFTEMsSUFBQUEsSUFBSSxFQUFFLENBQUViLFdBQVcsQ0FBQyxNQUFELENBQWIsQ0FGRCxFQUFSLENBRkc7O0FBTUhjLG1EQUF3QkMsUUFBeEIsRUFORyw4Q0FDSjtBQU1NQyxFQUFBQSxJQU5OLFNBTW1CWixVQU5uQixDQU04QjtBQUMxQixVQUFNYSxvQkFBTixHQUE2QjtBQUN6QixZQUFNLE1BQU1BLG9CQUFOLENBQTJCO0FBQzdCakIsUUFBQUEsV0FBVyxFQUFFQSxXQUFXLENBQUMsTUFBRCxDQURLO0FBRTdCa0IsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BRmU7QUFHN0JDLFFBQUFBLE9BQU8sRUFBRSxFQUFFQyxjQUFjLEVBQUUsTUFBbEIsRUFIb0IsRUFBM0IsQ0FBTjs7QUFLSCxLQVB5QixDQVAxQixrQ0FBUjs7QUFnQkEsU0FBT2YsSUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NEZWNvcmF0b3IgYXMgcHJvdG90eXBlQ2hhaW5EZWJ1Z30gZnJvbSAnQGRlcGVuZGVuY3kvcHJvdG90eXBlQ2hhaW5EZWJ1ZydcclxuaW1wb3J0IHsgYWRkLCBleGVjdXRlLCBjb25kaXRpb25hbCB9IGZyb20gJ0BkZXBlbmRlbmN5L2NvbW1vblBhdHRlcm4vc291cmNlL2RlY29yYXRvclV0aWxpdHkuanMnXHJcbmltcG9ydCB7IGV4dGVuZGVkU3ViY2xhc3NQYXR0ZXJuIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZXh0ZW5kZWRTdWJjbGFzc1BhdHRlcm4uanMnXHJcbmltcG9ydCB7IGN1cnJpZWQgYXMgZ2V0VGFibGVEb2N1bWVudEN1cnJpZWQgfSBmcm9tIFwiQGRlcGVuZGVuY3kvZGF0YWJhc2VVdGlsaXR5L3NvdXJjZS9xdWVyeS9nZXRUYWJsZURvY3VtZW50LnF1ZXJ5LmpzXCI7XHJcblxyXG5sZXQgZGF0YWJhc2VQcmVmaXggPSAnbWlkZGxld2FyZV8nXHJcbmxldCBnZXREb2N1bWVudCA9IHtcclxuICAgICdVbml0JzogZ2V0VGFibGVEb2N1bWVudEN1cnJpZWQoeyBkYXRhYmFzZU5hbWU6ICd3ZWJhcHBTZXR0aW5nJywgdGFibGVOYW1lOiBgJHtkYXRhYmFzZVByZWZpeH11bml0YCB9KSxcclxuICAgICdGaWxlJzogZ2V0VGFibGVEb2N1bWVudEN1cnJpZWQoeyBkYXRhYmFzZU5hbWU6ICd3ZWJhcHBTZXR0aW5nJywgdGFibGVOYW1lOiBgJHtkYXRhYmFzZVByZWZpeH1maWxlYCB9KSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVuaXRGdW5jdGlvbih7IFN1cGVyY2xhc3MgfSkge1xyXG4gICAgbGV0IHNlbGYgPSBcclxuICAgICAgICBAY29uZGl0aW9uYWwoeyBkZWNvcmF0b3I6IHByb3RvdHlwZUNoYWluRGVidWcsIGNvbmRpdGlvbjogcHJvY2Vzcy5lbnYuU1pOX0RFQlVHIH0pXHJcbiAgICAgICAgQGV4ZWN1dGUoe1xyXG4gICAgICAgICAgICBzdGF0aWNNZXRob2Q6ICdpbml0aWFsaXplU3RhdGljQ2xhc3MnLCBcclxuICAgICAgICAgICAgYXJnczogWyBnZXREb2N1bWVudFsnVW5pdCddIF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIEBleHRlbmRlZFN1YmNsYXNzUGF0dGVybi5TdWJjbGFzcygpXHJcbiAgICAgICAgY2xhc3MgVW5pdCBleHRlbmRzIFN1cGVyY2xhc3Mge1xyXG4gICAgICAgICAgICBhc3luYyBwdXBvbGF0ZVVuaXRXaXRoRmlsZSgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHN1cGVyLnB1cG9sYXRlVW5pdFdpdGhGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBnZXREb2N1bWVudDogZ2V0RG9jdW1lbnRbJ0ZpbGUnXSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlS2V5OiB0aGlzLmZpbGVLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdDogeyBkZXN0aW5hdGlvbktleTogJ2ZpbGUnIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gc2VsZlxyXG59Il19