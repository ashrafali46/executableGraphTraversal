"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports, "__esModule", { value: true });var _exportNames = { traverse: true, invokeNextTraversalPromise: true, traverserInstruction: true };exports.invokeNextTraversalPromise = invokeNextTraversalPromise;exports.traverserInstruction = exports.traverse = void 0;var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));var _proxifyMethodDecorator = require("../../utility/proxifyMethodDecorator.js");
var _handleJSNativeDataStructure = require("@dependency/handleJSNativeDataStructure");

var _TraverserPositionClass = require("./TraverserPosition.class.js");


var _iteration = require("./method/iteration.js");Object.keys(_iteration).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _iteration[key];} });});
var _stageNode = require("./method/stageNode.js");Object.keys(_stageNode).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _stageNode[key];} });});
var _rerouteNode = require("./method/rerouteNode.js");Object.keys(_rerouteNode).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _rerouteNode[key];} });});
var _forkEdge = require("./method/forkEdge.js");Object.keys(_forkEdge).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _forkEdge[key];} });});
var _executeEdge = require("./method/executeEdge.js");Object.keys(_executeEdge).forEach(function (key) {if (key === "default" || key === "__esModule") return;if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;Object.defineProperty(exports, key, { enumerable: true, get: function () {return _executeEdge[key];} });});var _traverserInstruction = _interopRequireWildcard(require("./method/traverserInstruction"));exports.traverserInstruction = _traverserInstruction;var _dec, _obj;







const { traverse } = (_dec =


(0, _proxifyMethodDecorator.proxifyMethodDecorator)(async (target, thisArg, argumentsList, targetClass, methodName) => {var _argumentsList$;

  let { nodeInstance, nodeKey, nodeID, traverserPosition } = argumentsList[0];
  if (!nodeInstance) {var _context;
    if (nodeKey) nodeInstance = await (_context = thisArg.graph.database, thisArg.graph.database.implementation.getNodeByKey).call(_context, { key: nodeKey });else

      if (nodeID) nodeInstance = await (_context = thisArg.graph.database, thisArg.graph.database.implementation.getNodeByID).call(_context, { id: nodeID });else

        if (traverserPosition) nodeInstance = traverserPosition.node;else

          throw new Error('• node identifier or object must be passed in.');
    ['nodeKey', 'nodeID'].forEach(property => delete argumentsList[0][property]);
  }

  nodeInstance.entrypointNodeType = _TraverserPositionClass.TraverserPosition.getEntrypointNodeType({ node: nodeInstance });

  (_argumentsList$ = argumentsList[0]).nodeInstance || (_argumentsList$.nodeInstance = nodeInstance);
  return Reflect.apply(target, thisArg, argumentsList);
}), (_obj = {
  async traverse(
  {
    nodeInstance,
    implementationKey,
    evaluation,
    additionalChildNode,

    traverserPosition },

  { parentTraverserPosition, traverseCallContext } = {})
  {
    this.statistics.traversedNodeList.push(nodeInstance);


    traverserPosition || (traverserPosition = new _TraverserPositionClass.TraverserPosition({ traverser: this, node: nodeInstance, parentTraverserPosition }));

    if (implementationKey) {var _implementationKey;
      traverserPosition.setImplementationHierarchy('parameter', (_implementationKey = implementationKey, (0, _handleJSNativeDataStructure.removeUndefinedFromObject)(_implementationKey)));



    }


    if (evaluation) {
      traverserPosition.setEvaluationHierarchy('parameter', evaluation);

      delete arguments[0].evaluation;
    }


    let { implementationConfiguration, evaluationConfiguration } = await this.traverserInstruction.configurationEvaluation.resolveEvaluationConfiguration.call(this, {
      targetNode: traverserPosition.node });

    traverserPosition.setImplementationHierarchy('configuration', implementationConfiguration);
    traverserPosition.setEvaluationHierarchy('configuration', evaluationConfiguration);


    traverserPosition.initialize();

    let entrypointNodeImplementation = traverserPosition.getEntrypointNodeImplementation();
    return await entrypointNodeImplementation.call(this, { traverserPosition, additionalChildNode }, { traverseCallContext });
  } }, ((0, _applyDecoratedDescriptor2.default)(_obj, "traverse", [_dec], Object.getOwnPropertyDescriptor(_obj, "traverse"), _obj)), _obj));exports.traverse = traverse;



async function invokeNextTraversalPromise() {
  if (this.iteratorObjectList.length == 0) return;

  let iteratorObject;
  do {
    if (this.iteratorObjectList.length == 0) return;
    let iterator = this.iteratorObjectList[this.iteratorObjectList.length - 1];
    iteratorObject = await iterator.next();
    if (iteratorObject.done) this.iteratorObjectList.pop();
  } while (iteratorObject.done);

  let traversalPromise = iteratorObject.value.traversalInvocation();
  return { traversalPromise, node: iteratorObject.value.node };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlL1RyYXZlcnNlci9wcm90b3R5cGUuanMiXSwibmFtZXMiOlsidHJhdmVyc2UiLCJ0YXJnZXQiLCJ0aGlzQXJnIiwiYXJndW1lbnRzTGlzdCIsInRhcmdldENsYXNzIiwibWV0aG9kTmFtZSIsIm5vZGVJbnN0YW5jZSIsIm5vZGVLZXkiLCJub2RlSUQiLCJ0cmF2ZXJzZXJQb3NpdGlvbiIsImdyYXBoIiwiZGF0YWJhc2UiLCJpbXBsZW1lbnRhdGlvbiIsImdldE5vZGVCeUtleSIsImtleSIsImdldE5vZGVCeUlEIiwiaWQiLCJub2RlIiwiRXJyb3IiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJlbnRyeXBvaW50Tm9kZVR5cGUiLCJUcmF2ZXJzZXJQb3NpdGlvbiIsImdldEVudHJ5cG9pbnROb2RlVHlwZSIsIlJlZmxlY3QiLCJhcHBseSIsImltcGxlbWVudGF0aW9uS2V5IiwiZXZhbHVhdGlvbiIsImFkZGl0aW9uYWxDaGlsZE5vZGUiLCJwYXJlbnRUcmF2ZXJzZXJQb3NpdGlvbiIsInRyYXZlcnNlQ2FsbENvbnRleHQiLCJzdGF0aXN0aWNzIiwidHJhdmVyc2VkTm9kZUxpc3QiLCJwdXNoIiwidHJhdmVyc2VyIiwic2V0SW1wbGVtZW50YXRpb25IaWVyYXJjaHkiLCJyZW1vdmVVbmRlZmluZWRGcm9tT2JqZWN0Iiwic2V0RXZhbHVhdGlvbkhpZXJhcmNoeSIsImFyZ3VtZW50cyIsImltcGxlbWVudGF0aW9uQ29uZmlndXJhdGlvbiIsImV2YWx1YXRpb25Db25maWd1cmF0aW9uIiwidHJhdmVyc2VySW5zdHJ1Y3Rpb24iLCJjb25maWd1cmF0aW9uRXZhbHVhdGlvbiIsInJlc29sdmVFdmFsdWF0aW9uQ29uZmlndXJhdGlvbiIsInRhcmdldE5vZGUiLCJpbml0aWFsaXplIiwiZW50cnlwb2ludE5vZGVJbXBsZW1lbnRhdGlvbiIsImdldEVudHJ5cG9pbnROb2RlSW1wbGVtZW50YXRpb24iLCJpbnZva2VOZXh0VHJhdmVyc2FsUHJvbWlzZSIsIml0ZXJhdG9yT2JqZWN0TGlzdCIsImxlbmd0aCIsIml0ZXJhdG9yT2JqZWN0IiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInBvcCIsInRyYXZlcnNhbFByb21pc2UiLCJ2YWx1ZSIsInRyYXZlcnNhbEludm9jYXRpb24iXSwibWFwcGluZ3MiOiJ3a0JBQUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2VTs7Ozs7Ozs7QUFRTyxNQUFNLEVBQUVBLFFBQUY7OztBQUdWLG9EQUF1QixPQUFPQyxNQUFQLEVBQWVDLE9BQWYsRUFBd0JDLGFBQXhCLEVBQXVDQyxXQUF2QyxFQUFvREMsVUFBcEQsS0FBbUU7O0FBRXpGLE1BQUksRUFBRUMsWUFBRixFQUFnQ0MsT0FBaEMsRUFBeUNDLE1BQXpDLEVBQWlEQyxpQkFBakQsS0FBdUVOLGFBQWEsQ0FBQyxDQUFELENBQXhGO0FBQ0EsTUFBSSxDQUFDRyxZQUFMLEVBQW1CO0FBQ2pCLFFBQUlDLE9BQUosRUFBYUQsWUFBWSxHQUFHLE1BQU0sWUFBQUosT0FBTyxDQUFDUSxLQUFSLENBQWNDLFFBQWQsRUFBd0JULE9BQU8sQ0FBQ1EsS0FBUixDQUFjQyxRQUFkLENBQXVCQyxjQUF2QixDQUFzQ0MsWUFBOUQsaUJBQTJFLEVBQUVDLEdBQUcsRUFBRVAsT0FBUCxFQUEzRSxDQUFyQixDQUFiOztBQUVLLFVBQUlDLE1BQUosRUFBWUYsWUFBWSxHQUFHLE1BQU0sWUFBQUosT0FBTyxDQUFDUSxLQUFSLENBQWNDLFFBQWQsRUFBd0JULE9BQU8sQ0FBQ1EsS0FBUixDQUFjQyxRQUFkLENBQXVCQyxjQUF2QixDQUFzQ0csV0FBOUQsaUJBQTBFLEVBQUVDLEVBQUUsRUFBRVIsTUFBTixFQUExRSxDQUFyQixDQUFaOztBQUVBLFlBQUlDLGlCQUFKLEVBQXVCSCxZQUFZLEdBQUdHLGlCQUFpQixDQUFDUSxJQUFqQyxDQUF2Qjs7QUFFQSxnQkFBTSxJQUFJQyxLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNKLEtBQUMs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SixjQUFjLENBQUNHLElBTHhCOztBQU9BLE1BQUlFLGdCQUFnQixHQUFHTCxjQUFjLENBQUNNLEtBQWYsQ0FBcUJDLG1CQUFyQixFQUF2QjtBQUNBLFNBQU8sRUFBRUYsZ0JBQUYsRUFBb0J2QyxJQUFJLEVBQUVrQyxjQUFjLENBQUNNLEtBQWYsQ0FBcUJ4QyxJQUEvQyxFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm94aWZ5TWV0aG9kRGVjb3JhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbGl0eS9wcm94aWZ5TWV0aG9kRGVjb3JhdG9yLmpzJ1xuaW1wb3J0IHsgcmVtb3ZlVW5kZWZpbmVkRnJvbU9iamVjdCB9IGZyb20gJ0BkZXBlbmRlbmN5L2hhbmRsZUpTTmF0aXZlRGF0YVN0cnVjdHVyZSdcbmltcG9ydCAqIGFzIENvbnRleHQgZnJvbSAnLi4vQ29udGV4dC5jbGFzcy5qcydcbmltcG9ydCB7IFRyYXZlcnNlclBvc2l0aW9uIH0gZnJvbSAnLi9UcmF2ZXJzZXJQb3NpdGlvbi5jbGFzcy5qcydcblxuLy8gRWFjaCBleHBvcnRlZCBwcm9wZXJ0eSBlbmRzIHVwIGFzIHRoZSBwcm90b3R5cGUgcHJvcGVydHkgb2YgdGhlIGNsYXNzLlxuZXhwb3J0ICogZnJvbSAnLi9tZXRob2QvaXRlcmF0aW9uLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9tZXRob2Qvc3RhZ2VOb2RlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9tZXRob2QvcmVyb3V0ZU5vZGUuanMnXG5leHBvcnQgKiBmcm9tICcuL21ldGhvZC9mb3JrRWRnZS5qcydcbmV4cG9ydCAqIGZyb20gJy4vbWV0aG9kL2V4ZWN1dGVFZGdlLmpzJ1xuZXhwb3J0ICogYXMgdHJhdmVyc2VySW5zdHJ1Y3Rpb24gZnJvbSAnLi9tZXRob2QvdHJhdmVyc2VySW5zdHJ1Y3Rpb24nXG5cbi8qKiBHcmFwaCB0cmF2ZXJzYWwgaW50ZWdyYXRpb24gbGF5ZXIgKGNvcmUpIC0gQ29udHJvbHMgdGhlIHRyYXZlcnNpbmcgdGhlIG5vZGVzIGluIHRoZSBncmFwaC4gV2hpY2ggaW5jbHVkZXMgcHJvY2Vzc2luZyBvZiBkYXRhIGl0ZW1zIGFuZCBhZ2dyZWdhdGlvbiBvZiByZXN1bHRzLlxuICogRHluYW1pYyBpbXBsZW1lbnRhdGlvbiAtIG5vdCByZXN0cmljdGVkIHRvIHNwZWNpZmljIGluaXRpYWxpemF0aW9uIGFsZ29yaXRobSwgcmF0aGVyIGNob29zZW4gZnJvbSBzZXR0aW5nIG9mIGVhY2ggbm9kZSBpbiB0aGUgdHJhdmVyc2VkIGdyYXBoLlxuICogRWRnZSBmdW5jdGlvbnMgYXJlIHBhcnQgb2YgdGhlIGludGVncmF0aW9uIGxheWVyIHdoZXJlIG5vZGUgaW1wbGVtZW50YXRpb25zIGFyZSBjYWxsZWQuXG4gKi9cbi8vIE5vdGU6IHdyYXBwaW5nIGluIG9iamVjdCBhbGxvd3MgdGhlIHVzYWdlIG9mIGRlY29yYXRvcnMgYXMgdGhleSBjb3VsZG4ndCBiZSB1c2VkIG9uIHNlcGFyYXRlIGZ1bmN0aW9ucy5cbmV4cG9ydCBjb25zdCB7IHRyYXZlcnNlIH0gPSB7XG4gIC8vIEluaXRpYXRlIHRyYXZlcnNhbCBvciBhbiBleGlzdGluZyB0cmF2ZXJzYWwgc2VxdWVuY2UuXG4gIC8qKiBUaGUgYHRyYXZlcnNlYCBtZXRob2QgaXMgdXNlZCB0byB0cmF2ZXJzZSBlbnRyeXBvaW50IG5vZGVzIG9ubHkgKFN0YWdlICYgUmVyb3V0ZS9TdWJncmFwaFRlbXBsYXRlKS4gKi9cbiAgQHByb3hpZnlNZXRob2REZWNvcmF0b3IoYXN5bmMgKHRhcmdldCwgdGhpc0FyZywgYXJndW1lbnRzTGlzdCwgdGFyZ2V0Q2xhc3MsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAvLyBjcmVhdGUgbm9kZSBpbnN0YW5jZSwgaW4gY2FzZSBzdHJpbmcga2V5IGlzIHBhc3NlZCBhcyBwYXJhbWV0ZXIuXG4gICAgbGV0IHsgbm9kZUluc3RhbmNlIC8qIHR5cGUgTm9kZSAqLywgbm9kZUtleSwgbm9kZUlELCB0cmF2ZXJzZXJQb3NpdGlvbiB9ID0gYXJndW1lbnRzTGlzdFswXVxuICAgIGlmICghbm9kZUluc3RhbmNlKSB7XG4gICAgICBpZiAobm9kZUtleSkgbm9kZUluc3RhbmNlID0gYXdhaXQgdGhpc0FyZy5ncmFwaC5kYXRhYmFzZTo6dGhpc0FyZy5ncmFwaC5kYXRhYmFzZS5pbXBsZW1lbnRhdGlvbi5nZXROb2RlQnlLZXkoeyBrZXk6IG5vZGVLZXkgfSlcbiAgICAgIC8vIHJldHJpZXZlIG5vZGUgZGF0YSBvbi1kZW1hbmRcbiAgICAgIGVsc2UgaWYgKG5vZGVJRCkgbm9kZUluc3RhbmNlID0gYXdhaXQgdGhpc0FyZy5ncmFwaC5kYXRhYmFzZTo6dGhpc0FyZy5ncmFwaC5kYXRhYmFzZS5pbXBsZW1lbnRhdGlvbi5nZXROb2RlQnlJRCh7IGlkOiBub2RlSUQgfSlcbiAgICAgIC8vIGluIGNhc2UgYW4gYWxyZWFkeSBpbml0aWF0ZWQgdHJhdmVyc2VyIGluc3RhbmNlIGlzIHBhc3NlZC5cbiAgICAgIGVsc2UgaWYgKHRyYXZlcnNlclBvc2l0aW9uKSBub2RlSW5zdGFuY2UgPSB0cmF2ZXJzZXJQb3NpdGlvbi5ub2RlXG4gICAgICAvLyByZXRyaWV2ZSBub2RlIGRhdGEgb24tZGVtYW5kXG4gICAgICBlbHNlIHRocm93IG5ldyBFcnJvcign4oCiIG5vZGUgaWRlbnRpZmllciBvciBvYmplY3QgbXVzdCBiZSBwYXNzZWQgaW4uJylcbiAgICAgIDtbJ25vZGVLZXknLCAnbm9kZUlEJ10uZm9yRWFjaChwcm9wZXJ0eSA9PiBkZWxldGUgYXJndW1lbnRzTGlzdFswXVtwcm9wZXJ0eV0pIC8vIHJlbW92ZSBub2RlIHJlbGF0ZWQgaWRlbnRpZmllcnMuXG4gICAgfVxuICAgIC8vIFZlcmlmeSBlbnRyeXBvaW50LCBhbmQgbWFyayB0aGUgbGFiZWwgYmVpbmcgdXNlZCBhcyBlbnRyeXBvaW50IG5vZGUgdHlwZSAoYXMgbXVsdGlwbGUgZW50cnlwb2ludCBub2RlIHR5cGVzIGNvdWxkIGJlIHJlZ2lzdGVyZWQgb24gdGhlIHNhbWUgbm9kZSlcbiAgICBub2RlSW5zdGFuY2UuZW50cnlwb2ludE5vZGVUeXBlID0gVHJhdmVyc2VyUG9zaXRpb24uZ2V0RW50cnlwb2ludE5vZGVUeXBlKHsgbm9kZTogbm9kZUluc3RhbmNlIH0pXG5cbiAgICBhcmd1bWVudHNMaXN0WzBdLm5vZGVJbnN0YW5jZSB8fD0gbm9kZUluc3RhbmNlIC8vIHNldCBub2RlIGRhdGFcbiAgICByZXR1cm4gUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3VtZW50c0xpc3QpXG4gIH0pXG4gIGFzeW5jIHRyYXZlcnNlKFxuICAgIHtcbiAgICAgIG5vZGVJbnN0YW5jZSxcbiAgICAgIGltcGxlbWVudGF0aW9uS2V5LFxuICAgICAgZXZhbHVhdGlvbixcbiAgICAgIGFkZGl0aW9uYWxDaGlsZE5vZGUsXG4gICAgICAvLyBjdXJyZW50IG5vZGUgcmVsYXRlZCBwYXJhbWV0ZXJzXG4gICAgICB0cmF2ZXJzZXJQb3NpdGlvbiwgLy8/IGNvdWxkIHJlbmFtZSBpdCB0byBcInRyYXZlcnNhbERlc2NyaXB0aW9uXCJcbiAgICB9LFxuICAgIHsgcGFyZW50VHJhdmVyc2VyUG9zaXRpb24sIHRyYXZlcnNlQ2FsbENvbnRleHQgfSA9IHt9LFxuICApIHtcbiAgICB0aGlzLnN0YXRpc3RpY3MudHJhdmVyc2VkTm9kZUxpc3QucHVzaChub2RlSW5zdGFuY2UpXG5cbiAgICAvLyBlYWNoIGNhbGwgY3JlYXRlcyBuZXcgdHJhdmVyc2VyIHdpdGggY2FsY3VsYXRpb24gb2YgdHJhdmVyc2FsIGltcGxlbWVudGF0aW9uIGhpZXJhcmNoeSAgYW5kIHBvc2l0aW9uIGV2YWx1YXRpb24gZm9yIHRoZSBjdXJyZW50IG5vZGVcbiAgICB0cmF2ZXJzZXJQb3NpdGlvbiB8fD0gbmV3IFRyYXZlcnNlclBvc2l0aW9uKHsgdHJhdmVyc2VyOiB0aGlzLCBub2RlOiBub2RlSW5zdGFuY2UsIHBhcmVudFRyYXZlcnNlclBvc2l0aW9uIH0pXG5cbiAgICBpZiAoaW1wbGVtZW50YXRpb25LZXkpIHtcbiAgICAgIHRyYXZlcnNlclBvc2l0aW9uLnNldEltcGxlbWVudGF0aW9uSGllcmFyY2h5KCdwYXJhbWV0ZXInLCBpbXBsZW1lbnRhdGlvbktleSB8PiByZW1vdmVVbmRlZmluZWRGcm9tT2JqZWN0KVxuICAgICAgLy8gVE9ETzogQWRkIGlmIHN0YXRlbWVudCB0byBjaGVjayBmb3IgY29uZmlndXJhdGlvbiBkZXB0aCB2YWx1ZSwgd2hlcmUgaXQgY29udHJvbHMgdGhlIGVmZmVjdCBvZiB0aGUgY29uZmlndXJhdGlvcG4gb3B0aW9uIG9uIHRoZSBuZXh0IG5lc3RlZCBub2RlcyBpbiB0aGUgZ3JhcGguIGkuZS4gUGFzc2luZyB0aGUgcGFyZW50IGFyZ3VtZW50IG9yIHJlbW92aW5nIGl0LlxuICAgICAgLyogZm9yIG5vdywgcGFzcyBhcmd1bWVudCB0byBhbGwgbmVzdGVkIG5vZGVzIGJ5IGRlZmF1bHQgKGJ5IG5vdCByZW1vdmluZyB0aGUgYXJndW1lbnQpXG4gICAgICAgICAgIGRlbGV0ZSBhcmd1bWVudHNbMF0uaW1wbGVtZW50YXRpb25LZXkgKi9cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdW5kZWZpbmVkIHZhbHVlcyBiZWNhdXNlIG5hdGl2ZSBPYmplY3QuYXNzaWduIGRvZXNuJ3Qgb3ZlcnJpZGUga2V5cyB3aXRoIGB1bmRlZmluZWRgIHZhbHVlc1xuICAgIGlmIChldmFsdWF0aW9uKSB7XG4gICAgICB0cmF2ZXJzZXJQb3NpdGlvbi5zZXRFdmFsdWF0aW9uSGllcmFyY2h5KCdwYXJhbWV0ZXInLCBldmFsdWF0aW9uKVxuICAgICAgLy8gVE9ETzogQWRkIGlmIHN0YXRlbWVudCB0byBjaGVjayBmb3IgY29uZmlndXJhdGlvbiBkZXB0aCB2YWx1ZSwgd2hlcmUgaXQgY29udHJvbHMgdGhlIGVmZmVjdCBvZiB0aGUgY29uZmlndXJhdGlvcG4gb3B0aW9uIG9uIHRoZSBuZXh0IG5lc3RlZCBub2RlcyBpbiB0aGUgZ3JhcGguIGkuZS4gUGFzc2luZyB0aGUgcGFyZW50IGFyZ3VtZW50IG9yIHJlbW92aW5nIGl0LlxuICAgICAgZGVsZXRlIGFyZ3VtZW50c1swXS5ldmFsdWF0aW9uXG4gICAgfVxuXG4gICAgLy8gRXZhbHVhdGlvbiB0aGF0IGFmZmVjdHMgdGhlIHRyYXZlcnNlciBpdHNlbGYgLSBnZXQgY29uZmlndXJhdGlvbiBvZiB0eXBlICdldmFsdWF0aW9uJyAmICdpbXBsZW1lbnRhdGlvbidcbiAgICBsZXQgeyBpbXBsZW1lbnRhdGlvbkNvbmZpZ3VyYXRpb24sIGV2YWx1YXRpb25Db25maWd1cmF0aW9uIH0gPSBhd2FpdCB0aGlzOjp0aGlzLnRyYXZlcnNlckluc3RydWN0aW9uLmNvbmZpZ3VyYXRpb25FdmFsdWF0aW9uLnJlc29sdmVFdmFsdWF0aW9uQ29uZmlndXJhdGlvbih7XG4gICAgICB0YXJnZXROb2RlOiB0cmF2ZXJzZXJQb3NpdGlvbi5ub2RlLFxuICAgIH0pXG4gICAgdHJhdmVyc2VyUG9zaXRpb24uc2V0SW1wbGVtZW50YXRpb25IaWVyYXJjaHkoJ2NvbmZpZ3VyYXRpb24nLCBpbXBsZW1lbnRhdGlvbkNvbmZpZ3VyYXRpb24pXG4gICAgdHJhdmVyc2VyUG9zaXRpb24uc2V0RXZhbHVhdGlvbkhpZXJhcmNoeSgnY29uZmlndXJhdGlvbicsIGV2YWx1YXRpb25Db25maWd1cmF0aW9uKVxuXG4gICAgLy8gc2V0IGFnZ3JlZ2F0b3IgdXNpbmcgb3duIGNhbGN1bGF0ZWQgaW1wbGVtZW50YXRpb25cbiAgICB0cmF2ZXJzZXJQb3NpdGlvbi5pbml0aWFsaXplKClcblxuICAgIGxldCBlbnRyeXBvaW50Tm9kZUltcGxlbWVudGF0aW9uID0gdHJhdmVyc2VyUG9zaXRpb24uZ2V0RW50cnlwb2ludE5vZGVJbXBsZW1lbnRhdGlvbigpXG4gICAgcmV0dXJuIGF3YWl0IHRoaXM6OmVudHJ5cG9pbnROb2RlSW1wbGVtZW50YXRpb24oeyB0cmF2ZXJzZXJQb3NpdGlvbiwgYWRkaXRpb25hbENoaWxkTm9kZSB9LCB7IHRyYXZlcnNlQ2FsbENvbnRleHQgfSlcbiAgfSxcbn1cblxuLy8gZW5jYXBzdWxhdGVzIGl0ZXJhdG9ycyBkdXJpbmcgdHJhdmVyc2FsIG9mIHRoZSBncmFwaCAocmVsYXRpbmcgdG8gYSB0cmF2ZXJzZXIgc2VxdWVuY2UpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW52b2tlTmV4dFRyYXZlcnNhbFByb21pc2UoKSB7XG4gIGlmICh0aGlzLml0ZXJhdG9yT2JqZWN0TGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuIC8vIGlmIG5vIGl0ZXJhdG9yc1xuXG4gIGxldCBpdGVyYXRvck9iamVjdFxuICBkbyB7XG4gICAgaWYgKHRoaXMuaXRlcmF0b3JPYmplY3RMaXN0Lmxlbmd0aCA9PSAwKSByZXR1cm4gLy8gbm8gbW9yZSBpdGVyYXRvcnNcbiAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yT2JqZWN0TGlzdFt0aGlzLml0ZXJhdG9yT2JqZWN0TGlzdC5sZW5ndGggLSAxXSAvLyBsYXN0IGl0ZXJhdG9yIGFkZGVkIGR1cmluZyB0cmF2ZXJzZXJcbiAgICBpdGVyYXRvck9iamVjdCA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoKVxuICAgIGlmIChpdGVyYXRvck9iamVjdC5kb25lKSB0aGlzLml0ZXJhdG9yT2JqZWN0TGlzdC5wb3AoKVxuICB9IHdoaWxlIChpdGVyYXRvck9iamVjdC5kb25lKVxuXG4gIGxldCB0cmF2ZXJzYWxQcm9taXNlID0gaXRlcmF0b3JPYmplY3QudmFsdWUudHJhdmVyc2FsSW52b2NhdGlvbigpXG4gIHJldHVybiB7IHRyYXZlcnNhbFByb21pc2UsIG5vZGU6IGl0ZXJhdG9yT2JqZWN0LnZhbHVlLm5vZGUgfVxufVxuIl19