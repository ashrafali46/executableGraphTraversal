"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports, "__esModule", { value: true });exports.clientInterface = exports.$ = exports.class = void 0;var _skipFirstGeneratorNext2 = _interopRequireDefault(require("@babel/runtime/helpers/skipFirstGeneratorNext"));var _assert = _interopRequireDefault(require("assert"));

var _entity = require("@dependency/entity");

var ImplementationManagement = _interopRequireWildcard(require("../ImplementationManagement.class.js"));var _instancePrototype, _instancePrototype2;



















const { class: Class, reference: $ } = new ImplementationManagement.clientInterface({ label: 'Traverser' });exports.$ = $;exports.class = Class;

_instancePrototype = Class[$.prototypeDelegation.getter].call(Class, _entity.Entity.$.key.stateInstance).instancePrototype, Object.assign(_instancePrototype, require('./prototype.js'));

_instancePrototype2 = Class[$.prototypeDelegation.getter].call(Class, _entity.Constructable.$.key.constructableInstance).instancePrototype, (
prototype => {
  Class[_entity.Entity.$.initialize.setter].call(prototype, {
    [_entity.Entity.$.key.handleDataInstance]: (function () {let _ref = function* ({ targetInstance, callerClass = this }, { graph }) {let _functionSent = yield;

        let { superCallback } = _functionSent;
        if (superCallback) targetInstance = superCallback.call(callerClass, ...arguments);

        targetInstance.statistics = {
          traversedNodeList: [] };

        targetInstance.graph = graph;
        (0, _assert.default)(targetInstance.graph, `• A graph instance must be passed to the Traverser class instances.`);


        targetInstance.iteratorObjectList = [];

        return targetInstance;
      },_ref2 = (0, _skipFirstGeneratorNext2.default)(_ref);return new Proxy(_ref, { apply(target, thisArgument, argumentsList) {return Reflect.apply(_ref2, thisArgument, argumentsList);} });})() });

})(_instancePrototype2);

const clientInterface = Class[_entity.Entity.$.clientInterface.switch].call(Class, _entity.Entity.$.key.stateInstance)({ constructorImplementation: _entity.Entity.$.key.stateInstance });exports.clientInterface = clientInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlL1RyYXZlcnNlci9UcmF2ZXJzZXIuY2xhc3MuanMiXSwibmFtZXMiOlsiY2xhc3MiLCJDbGFzcyIsInJlZmVyZW5jZSIsIiQiLCJJbXBsZW1lbnRhdGlvbk1hbmFnZW1lbnQiLCJjbGllbnRJbnRlcmZhY2UiLCJsYWJlbCIsInByb3RvdHlwZURlbGVnYXRpb24iLCJnZXR0ZXIiLCJFbnRpdHkiLCJrZXkiLCJzdGF0ZUluc3RhbmNlIiwiaW5zdGFuY2VQcm90b3R5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJyZXF1aXJlIiwiQ29uc3RydWN0YWJsZSIsImNvbnN0cnVjdGFibGVJbnN0YW5jZSIsImluaXRpYWxpemUiLCJzZXR0ZXIiLCJoYW5kbGVEYXRhSW5zdGFuY2UiLCJ0YXJnZXRJbnN0YW5jZSIsImNhbGxlckNsYXNzIiwiZ3JhcGgiLCJzdXBlckNhbGxiYWNrIiwiYXJndW1lbnRzIiwic3RhdGlzdGljcyIsInRyYXZlcnNlZE5vZGVMaXN0IiwiaXRlcmF0b3JPYmplY3RMaXN0Iiwic3dpdGNoIiwiY29uc3RydWN0b3JJbXBsZW1lbnRhdGlvbiJdLCJtYXBwaW5ncyI6Im9hQUFBOztBQUVBOztBQUVBLHdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxNQUFNLEVBQUVBLEtBQUssRUFBRUMsS0FBVCxFQUFnQkMsU0FBUyxFQUFFQyxDQUEzQixLQUFpQyxJQUFJQyx3QkFBd0IsQ0FBQ0MsZUFBN0IsQ0FBNkMsRUFBRUMsS0FBSyxFQUFFLFdBQVQsRUFBN0MsQ0FBdkMsQzs7QUFFQSxxQkFBT0wsS0FBSyxDQUFDRSxDQUFDLENBQUNJLG1CQUFGLENBQXNCQyxNQUF2QixDQUFaLE1BQUFQLEtBQUssRUFBc0NRLGVBQU9OLENBQVAsQ0FBU08sR0FBVCxDQUFhQyxhQUFuRCxDQUFMLENBQXVFQyxpQkFBdkUsRUFBMEdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrQkFBZCxFQUF5QkMsT0FBTyxDQUFDLGdCQUFELENBQWhDLENBQTFHOztBQUVBLHNCQUFPZixLQUFLLENBQUNFLENBQUMsQ0FBQ0ksbUJBQUYsQ0FBc0JDLE1BQXZCLENBQVosTUFBQVAsS0FBSyxFQUFzQ2dCLHNCQUFjZCxDQUFkLENBQWdCTyxHQUFoQixDQUFvQlEscUJBQTFELENBQUwsQ0FBc0ZOLGlCQUF0RjtBQUNNRyxTQUFTLElBQUk7QUFDSmQsRUFBQUEsS0FBSyxDQUFDUSxlQUFPTixDQUFQLENBQVNnQixVQUFULENBQW9CQyxNQUFyQixDQUFoQixNQUFBTCxTQUFTLEVBQW9DO0FBQzNDLEtBQUNOLGVBQU9OLENBQVAsQ0FBU08sR0FBVCxDQUFhVyxrQkFBZCx1Q0FBNkMsRUFBRUMsY0FBRixFQUFrQkMsV0FBVyxHQUFHLElBQWhDLEVBQTdDLEVBQXFGLEVBQUVDLEtBQUYsRUFBckYsRUFBZ0c7O0FBRTlGLFlBQUksRUFBRUMsYUFBRixrQkFBSjtBQUNBLFlBQUlBLGFBQUosRUFBbUJILGNBQWMsR0FBZ0JHLGFBQWIsTUFBQUYsV0FBVyxFQUFnQixHQUFHRyxTQUFuQixDQUE1Qjs7QUFFbkJKLFFBQUFBLGNBQWMsQ0FBQ0ssVUFBZixHQUE0QjtBQUMxQkMsVUFBQUEsaUJBQWlCLEVBQUUsRUFETyxFQUE1Qjs7QUFHQU4sUUFBQUEsY0FBYyxDQUFDRSxLQUFmLEdBQXVCQSxLQUF2QjtBQUNBLDZCQUFPRixjQUFjLENBQUNFLEtBQXRCLEVBQThCLHFFQUE5Qjs7O0FBR0FGLFFBQUFBLGNBQWMsQ0FBQ08sa0JBQWYsR0FBb0MsRUFBcEM7O0FBRUEsZUFBT1AsY0FBUDtBQUNELE9BZkQsNExBRDJDLEVBQXBDLENBQVQ7O0FBa0JELENBcEJIOztBQXNCQSxNQUFNakIsZUFBZSxHQUFVSixLQUFLLENBQUNRLGVBQU9OLENBQVAsQ0FBU0UsZUFBVCxDQUF5QnlCLE1BQTFCLENBQVosTUFBQTdCLEtBQUssRUFBeUNRLGVBQU9OLENBQVAsQ0FBU08sR0FBVCxDQUFhQyxhQUF0RCxDQUFMLENBQTBFLEVBQUVvQix5QkFBeUIsRUFBRXRCLGVBQU9OLENBQVAsQ0FBU08sR0FBVCxDQUFhQyxhQUExQyxFQUExRSxDQUF4QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnXHJcbmltcG9ydCB7IE11bHRpcGxlRGVsZWdhdGlvbiB9IGZyb20gJ0BkZXBlbmRlbmN5L2hhbmRsZVByb3RvdHlwZURlbGVnYXRpb24nXHJcbmltcG9ydCB7IEVudGl0eSwgQ29uc3RydWN0YWJsZSB9IGZyb20gJ0BkZXBlbmRlbmN5L2VudGl0eSdcclxuaW1wb3J0ICogYXMgQ29udGV4dCBmcm9tICcuLi9Db250ZXh0LmNsYXNzLmpzJ1xyXG5pbXBvcnQgKiBhcyBJbXBsZW1lbnRhdGlvbk1hbmFnZW1lbnQgZnJvbSAnLi4vSW1wbGVtZW50YXRpb25NYW5hZ2VtZW50LmNsYXNzLmpzJ1xyXG5cclxuLy8gaW50ZXJmYWNlIFRyYXZlcnNhbEltcGxlbWVudGF0aW9uIHtcclxuLy8gICAvLyBVc2FnZSBvZiBhc3luYyBnZW5lcmF0b3JzIHdpbGwgcHJldmVudCBoYW5kaW5nIHRoZSBjb250cm9sIHRvIGNhbGxlZCBmdW5jdGlvbiAoYWdhaW5zdCBgUnVuLXRvLWNvbXBsZXRlYCBwcmluY2lwbGUpLCBhbmQgd2lsbCBhbGxvdyBpbnRlcmNlcHRpbiB0aGUgZXhlY3V0aW9uIG1pZCB3YXkuXHJcbi8vICAgdHJhdmVyc2VHcmFwaDogRnVuY3Rpb247XHJcbi8vIH1cclxuXHJcbi8qXHJcbiAqKiBUcmF2ZXJzZXIgLSBob2xkcyB0cmF2ZXJzYWwgbWV0aG9kcyAmIHBsdWdpbnMvaW1wbGVtZW50YXRpb25zLCBhbmQgVHJhdmVyc2VyIGluc3RhbmNlcyByZXByZXNlbnQgdHJhdmVyc2FsIHNlcXVlbmNlcyBXaGljaCB0cmFja3MgJiBob2xkcyB0cmF2ZXJzYWwgaW5mb3JtYXRpb24uXHJcbiB0cmF2ZXJzZXIgY2FsbCByZWN1cnNpdmUgY2hhaW4gLSByZXByZXNlbnRzIGEgdHJhdmVyc2FsIHNlcXVlbmNlIHRoYXQgaGFzIGl0J3Mgb3duIGNhY2hlLCBhZ2dyZWdhdG9yLCBzdGF0aXN0aWNzLCBhbmQgb3RoZXIgcGFyYW1ldGVycy5cclxuIFRyYXZlcnNhbCBzeXN0ZW0gZm9yIHN1cHBvcnRpbmcgZGlmZmVyZW50IGdyYXBoIGltcGxlbWVudGF0aW9uIChjb25jcmV0ZSBiZWhhdmlvciBvZiBwbHVnaW4gdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGNsaWVudCB0YXJnZXQpLlxyXG5cclxuICBUcmF2ZXJzYWwgaW1wbGVtZW50YXRpb25zIGFsbG93IGZvciBwcm92aWRpbmcgY3VzdG9tIGxvZ2ljIGR1cmluZyB0cmF2ZXJzYWwgb2YgdGhlIGdyYXBoIGZvciBkaWZmZXJlbnQgcHVycG9zZXM6IFxyXG4gICAgLSBUZW1wbGF0ZSBzeXN0ZW0gdHJhdmVyc2FsIGxvZ2ljIFxyXG4gICAgLSBNaWRkbGV3YXJlIGV4ZWN1dGlvbiB0cmF2ZXJzYWwgbG9naWNcclxuICAgIC0gQ29uZGl0aW9uIHRyZWVzIGFuZCB3aXRoIGNvbXBsZXggbG9naWNhbCBvcGVyYXRpb24gY29tYmluYXRpb25zLlxyXG4gICAgZXRjLlxyXG5cclxuICogIC0gQ29udGV4dDogc2hhcmVkIGRhdGEgYWNjZXNzaWJsZSBiZXR3ZWVuIHRyYXZlcnNhbHMuXHJcbiAqL1xyXG5jb25zdCB7IGNsYXNzOiBDbGFzcywgcmVmZXJlbmNlOiAkIH0gPSBuZXcgSW1wbGVtZW50YXRpb25NYW5hZ2VtZW50LmNsaWVudEludGVyZmFjZSh7IGxhYmVsOiAnVHJhdmVyc2VyJyB9KVxyXG5cclxuQ2xhc3M6OkNsYXNzWyQucHJvdG90eXBlRGVsZWdhdGlvbi5nZXR0ZXJdKEVudGl0eS4kLmtleS5zdGF0ZUluc3RhbmNlKS5pbnN0YW5jZVByb3RvdHlwZSB8PiAocHJvdG90eXBlID0+IE9iamVjdC5hc3NpZ24ocHJvdG90eXBlLCByZXF1aXJlKCcuL3Byb3RvdHlwZS5qcycpKSlcclxuXHJcbkNsYXNzOjpDbGFzc1skLnByb3RvdHlwZURlbGVnYXRpb24uZ2V0dGVyXShDb25zdHJ1Y3RhYmxlLiQua2V5LmNvbnN0cnVjdGFibGVJbnN0YW5jZSkuaW5zdGFuY2VQcm90b3R5cGVcclxuICB8PiAocHJvdG90eXBlID0+IHtcclxuICAgIHByb3RvdHlwZTo6Q2xhc3NbRW50aXR5LiQuaW5pdGlhbGl6ZS5zZXR0ZXJdKHtcclxuICAgICAgW0VudGl0eS4kLmtleS5oYW5kbGVEYXRhSW5zdGFuY2VdOiBmdW5jdGlvbiooeyB0YXJnZXRJbnN0YW5jZSwgY2FsbGVyQ2xhc3MgPSB0aGlzIH0sIHsgZ3JhcGggfSkge1xyXG4gICAgICAgIC8vIHN1cGVyIGltcGxlbWVudGF0aW9uIHNob3VsZCB0YWtlIGNhcmUgb2Ygc2V0dGluZyB0aGUgY29uc3RydWN0YWJsZURlbGVnYXRpb25TZXR0aW5nXHJcbiAgICAgICAgbGV0IHsgc3VwZXJDYWxsYmFjayB9ID0gZnVuY3Rpb24uc2VudFxyXG4gICAgICAgIGlmIChzdXBlckNhbGxiYWNrKSB0YXJnZXRJbnN0YW5jZSA9IGNhbGxlckNsYXNzOjpzdXBlckNhbGxiYWNrKC4uLmFyZ3VtZW50cykgLy8gY2FsbCBpbXBsZW1lbnRhdGlvbiBoaWdoZXIgaW4gdGhlIGhpZXJhcmNoeS5cclxuXHJcbiAgICAgICAgdGFyZ2V0SW5zdGFuY2Uuc3RhdGlzdGljcyA9IHtcclxuICAgICAgICAgIHRyYXZlcnNlZE5vZGVMaXN0OiBbXSwgLy8gdHJhY2sgdHJhdmVyc2VkIG5vZGVzLlxyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRJbnN0YW5jZS5ncmFwaCA9IGdyYXBoXHJcbiAgICAgICAgYXNzZXJ0KHRhcmdldEluc3RhbmNlLmdyYXBoLCBg4oCiIEEgZ3JhcGggaW5zdGFuY2UgbXVzdCBiZSBwYXNzZWQgdG8gdGhlIFRyYXZlcnNlciBjbGFzcyBpbnN0YW5jZXMuYClcclxuXHJcbiAgICAgICAgLy8gZm9yIHByb3ZpZGluZyBzaGFyZWQgaXRlcmF0b3IgZm9yIGFsbCB0cmF2ZXJzYWwgc2VxdWVuY2VcclxuICAgICAgICB0YXJnZXRJbnN0YW5jZS5pdGVyYXRvck9iamVjdExpc3QgPSBbXSAvLyBOb3RlOiB0aGVzZSBhcmUgbm90IGl0ZXJhdG9yIGZ1bmN0aW9ucywgcmF0aGVyIHRoZSBvYmplY3RzIGNyZWF0ZWQgYnkgdGhlbS5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldEluc3RhbmNlXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG5jb25zdCBjbGllbnRJbnRlcmZhY2UgPSBDbGFzczo6Q2xhc3NbRW50aXR5LiQuY2xpZW50SW50ZXJmYWNlLnN3aXRjaF0oRW50aXR5LiQua2V5LnN0YXRlSW5zdGFuY2UpKHsgY29uc3RydWN0b3JJbXBsZW1lbnRhdGlvbjogRW50aXR5LiQua2V5LnN0YXRlSW5zdGFuY2UgfSlcclxuXHJcbmV4cG9ydCB7IENsYXNzIGFzIGNsYXNzLCAkLCBjbGllbnRJbnRlcmZhY2UgfVxyXG4iXX0=