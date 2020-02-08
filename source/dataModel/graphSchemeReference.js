"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.functionProperty = exports.forkProperty = exports.caseProperty = exports.resourceProperty = exports.valueProperty = exports.referenceProperty = exports.rerouteProperty = exports.traversalOption = exports.evaluationOption = exports.connectionType = exports.nodeLabel = void 0;

const nodeLabel = {
  stage: 'Stage',
  port: 'Port',
  process: 'Process',
  configuration: 'Configuration',
  file: 'File',
  function: 'Function',
  reroute: 'Reroute' };exports.nodeLabel = nodeLabel;






const connectionType = {

  reference: 'REFERENCE',
  insert: 'INSERT',
  extend: 'EXTEND',

  next: 'NEXT',
  fork: 'FORK',

  configure: 'CONFIGURE',

  execute: 'EXECUTE',
  pipe: 'PIPE',
  resource: 'RESOURCE',
  value: 'VALUE',
  fallback: 'FALLBACK',
  select: 'SELECT',
  case: 'CASE',
  subgraph: 'SUBGRAPH' };exports.connectionType = connectionType;





const evaluationOption = {
  propagation: {

    continue: 'continue',
    break: 'break',
    hult: 'hult' },

  aggregation: {

    include: 'process&include',
    exclude: 'process&exclude',
    skip: 'skipProcess' } };exports.evaluationOption = evaluationOption;



const traversalOption = ['processNode', 'portNode', 'aggregator', 'traversalInterception'];exports.traversalOption = traversalOption;

const rerouteProperty = {
  externalReferenceNodeKey: 'externalReferenceNodeKey' };exports.rerouteProperty = rerouteProperty;


const referenceProperty = {
  resolutionImplementation: ['selection', 'node'] };exports.referenceProperty = referenceProperty;


const valueProperty = {
  type: ['conditionSubgraph', 'properties', 'node', 'valueProperty'] };exports.valueProperty = valueProperty;


const resourceProperty = {
  context: ['applicationReference', 'filesystemReference'] };exports.resourceProperty = resourceProperty;


const caseProperty = ['expected'];exports.caseProperty = caseProperty;

const forkProperty = { handlePropagationImplementation: ['chronological', 'raceFirstPromise', 'allPromise'] };exports.forkProperty = forkProperty;

const functionProperty = ['functionName'];exports.functionProperty = functionProperty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9kYXRhTW9kZWwvZ3JhcGhTY2hlbWVSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsibm9kZUxhYmVsIiwic3RhZ2UiLCJwb3J0IiwicHJvY2VzcyIsImNvbmZpZ3VyYXRpb24iLCJmaWxlIiwiZnVuY3Rpb24iLCJyZXJvdXRlIiwiY29ubmVjdGlvblR5cGUiLCJyZWZlcmVuY2UiLCJpbnNlcnQiLCJleHRlbmQiLCJuZXh0IiwiZm9yayIsImNvbmZpZ3VyZSIsImV4ZWN1dGUiLCJwaXBlIiwicmVzb3VyY2UiLCJ2YWx1ZSIsImZhbGxiYWNrIiwic2VsZWN0IiwiY2FzZSIsInN1YmdyYXBoIiwiZXZhbHVhdGlvbk9wdGlvbiIsInByb3BhZ2F0aW9uIiwiY29udGludWUiLCJicmVhayIsImh1bHQiLCJhZ2dyZWdhdGlvbiIsImluY2x1ZGUiLCJleGNsdWRlIiwic2tpcCIsInRyYXZlcnNhbE9wdGlvbiIsInJlcm91dGVQcm9wZXJ0eSIsImV4dGVybmFsUmVmZXJlbmNlTm9kZUtleSIsInJlZmVyZW5jZVByb3BlcnR5IiwicmVzb2x1dGlvbkltcGxlbWVudGF0aW9uIiwidmFsdWVQcm9wZXJ0eSIsInR5cGUiLCJyZXNvdXJjZVByb3BlcnR5IiwiY29udGV4dCIsImNhc2VQcm9wZXJ0eSIsImZvcmtQcm9wZXJ0eSIsImhhbmRsZVByb3BhZ2F0aW9uSW1wbGVtZW50YXRpb24iLCJmdW5jdGlvblByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOztBQUVPLE1BQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsS0FBSyxFQUFFLE9BRGdCO0FBRXZCQyxFQUFBQSxJQUFJLEVBQUUsTUFGaUI7QUFHdkJDLEVBQUFBLE9BQU8sRUFBRSxTQUhjO0FBSXZCQyxFQUFBQSxhQUFhLEVBQUUsZUFKUTtBQUt2QkMsRUFBQUEsSUFBSSxFQUFFLE1BTGlCO0FBTXZCQyxFQUFBQSxRQUFRLEVBQUUsVUFOYTtBQU92QkMsRUFBQUEsT0FBTyxFQUFFLFNBUGMsRUFBbEIsQzs7Ozs7OztBQWNBLE1BQU1DLGNBQWMsR0FBRzs7QUFFNUJDLEVBQUFBLFNBQVMsRUFBRSxXQUZpQjtBQUc1QkMsRUFBQUEsTUFBTSxFQUFFLFFBSG9CO0FBSTVCQyxFQUFBQSxNQUFNLEVBQUUsUUFKb0I7O0FBTTVCQyxFQUFBQSxJQUFJLEVBQUUsTUFOc0I7QUFPNUJDLEVBQUFBLElBQUksRUFBRSxNQVBzQjs7QUFTNUJDLEVBQUFBLFNBQVMsRUFBRSxXQVRpQjs7QUFXNUJDLEVBQUFBLE9BQU8sRUFBRSxTQVhtQjtBQVk1QkMsRUFBQUEsSUFBSSxFQUFFLE1BWnNCO0FBYTVCQyxFQUFBQSxRQUFRLEVBQUUsVUFia0I7QUFjNUJDLEVBQUFBLEtBQUssRUFBRSxPQWRxQjtBQWU1QkMsRUFBQUEsUUFBUSxFQUFFLFVBZmtCO0FBZ0I1QkMsRUFBQUEsTUFBTSxFQUFFLFFBaEJvQjtBQWlCNUJDLEVBQUFBLElBQUksRUFBRSxNQWpCc0I7QUFrQjVCQyxFQUFBQSxRQUFRLEVBQUUsVUFsQmtCLEVBQXZCLEM7Ozs7OztBQXdCQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsV0FBVyxFQUFFOztBQUVYQyxJQUFBQSxRQUFRLEVBQUUsVUFGQztBQUdYQyxJQUFBQSxLQUFLLEVBQUUsT0FISTtBQUlYQyxJQUFBQSxJQUFJLEVBQUUsTUFKSyxFQURpQjs7QUFPOUJDLEVBQUFBLFdBQVcsRUFBRTs7QUFFWEMsSUFBQUEsT0FBTyxFQUFFLGlCQUZFO0FBR1hDLElBQUFBLE9BQU8sRUFBRSxpQkFIRTtBQUlYQyxJQUFBQSxJQUFJLEVBQUUsYUFKSyxFQVBpQixFQUF6QixDOzs7O0FBZUEsTUFBTUMsZUFBZSxHQUFHLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixZQUE1QixFQUEwQyx1QkFBMUMsQ0FBeEIsQzs7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDN0JDLEVBQUFBLHdCQUF3QixFQUFFLDBCQURHLEVBQXhCLEM7OztBQUlBLE1BQU1DLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSx3QkFBd0IsRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLENBREssRUFBMUIsQzs7O0FBSUEsTUFBTUMsYUFBYSxHQUFHO0FBQzNCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixZQUF0QixFQUFvQyxNQUFwQyxFQUE0QyxlQUE1QyxDQURxQixFQUF0QixDOzs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsc0JBQUQsRUFBeUIscUJBQXpCLENBRHFCLEVBQXpCLEM7OztBQUlBLE1BQU1DLFlBQVksR0FBRyxDQUFDLFVBQUQsQ0FBckIsQzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsRUFBRUMsK0JBQStCLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixFQUFzQyxZQUF0QyxDQUFuQyxFQUFyQixDOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLENBQUMsY0FBRCxDQUF6QixDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFNjaGVtZSBSZWZlcmVuY2UgLSBzaGFyZWQgYnkgVHJhdmVyc2VyIGxvZ2ljIChVc3VhbGx5IGluIHZhbGlkYXRpb24pIGFuZCBEYXRhYmFzZSBncmFwaC4gKi9cblxuZXhwb3J0IGNvbnN0IG5vZGVMYWJlbCA9IHtcbiAgc3RhZ2U6ICdTdGFnZScsXG4gIHBvcnQ6ICdQb3J0JyxcbiAgcHJvY2VzczogJ1Byb2Nlc3MnLFxuICBjb25maWd1cmF0aW9uOiAnQ29uZmlndXJhdGlvbicsXG4gIGZpbGU6ICdGaWxlJyxcbiAgZnVuY3Rpb246ICdGdW5jdGlvbicsXG4gIHJlcm91dGU6ICdSZXJvdXRlJywgLy8gcHJldmlvdXNseSBuYW1lZCBzdWJncmFwaFRlbXBsYXRlOiAnU3ViZ3JhcGhUZW1wbGF0ZScsXG4gIC8vIGV2YWx1YXRpb246ICdFdmFsdWF0aW9uJyxcbiAgLy8gbm9kZVJlZmVyZW5jZTogJ05vZGVSZWZlcmVuY2UnLFxuICAvLyBzd2l0Y2g6ICdTd2l0Y2gnLFxuICAvLyBzd2l0Y2hCb29sZWFuOiAnU3dpdGNoQm9vbGVhbicsXG59XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0aW9uVHlwZSA9IHtcbiAgLy8gUmVyb3V0ZVxuICByZWZlcmVuY2U6ICdSRUZFUkVOQ0UnLFxuICBpbnNlcnQ6ICdJTlNFUlQnLFxuICBleHRlbmQ6ICdFWFRFTkQnLFxuICAvLyBTdGFnZVxuICBuZXh0OiAnTkVYVCcsXG4gIGZvcms6ICdGT1JLJyxcbiAgLy9UT0RPOiBpbXBsZW1lbnQgYGRlcHRoQWZmZWN0ZWRgIHByb3BlcnR5IGZvciBDT05GSUdVUkUgY29ubmVjdGlvblxuICBjb25maWd1cmU6ICdDT05GSUdVUkUnLFxuICAvLyBQcm9jZXNzICYgRXZhbHVhdGlvblxuICBleGVjdXRlOiAnRVhFQ1VURScsXG4gIHBpcGU6ICdQSVBFJyxcbiAgcmVzb3VyY2U6ICdSRVNPVVJDRScsXG4gIHZhbHVlOiAnVkFMVUUnLCAvLyB7dHlwZTogJ25vZGUnIHx8ICdwcm9wZXJ0aWVzJ30gaS5lLiByZXR1cm4gdGhlIG5vZGUgcmVmZXJlbmNlIG9yIHJldHVybiBpdHMgcHJvcGVydGllcy5cbiAgZmFsbGJhY2s6ICdGQUxMQkFDSycsXG4gIHNlbGVjdDogJ1NFTEVDVCcsXG4gIGNhc2U6ICdDQVNFJyxcbiAgc3ViZ3JhcGg6ICdTVUJHUkFQSCcsIC8vIHN1YmdyYXBocyB1c2VkIGZvciBzZWNvbmRhcnkgdHJhdmVyc2Fscy5cbiAgLy8gcm9vdDogJ1JPT1QnLFxuICAvLyBydW46ICdSVU4nLCAvLyBydW4gYXMgc3ViZ3JhcGggd2hlcmUgdGhlIHJlc3VsdCBvZiB0aGUgc3ViZ3JhcGggdHJhdmVyc2FsIGlzIHRvIGJlIHVzZWQgaW4gdGhlIHN0YWdlIG5vZGUgY2FsbGluZyBpdC5cbiAgLy8gaW5oZXJpdDogJ0lOSEVSSVQnLFxufVxuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvbk9wdGlvbiA9IHtcbiAgcHJvcGFnYXRpb246IHtcbiAgICAvLyB0cmF2ZXJzZSBuZWlnaGJvdXJzIG9yIG5vdC5cbiAgICBjb250aW51ZTogJ2NvbnRpbnVlJywgLy8gY29udGludWUgdHJhdmVyc2FsIG9mIGNoaWxkIG5vZGVzXG4gICAgYnJlYWs6ICdicmVhaycsIC8vIGRvIG5vdCB0cmF2ZXJzZSBzdWJwcm9jZXNzXG4gICAgaHVsdDogJ2h1bHQnLCAvLyBodWx0IHRyYXZlcnNhbCBhbGwgdG9nZXRoZXIgYW5kIHJldHVybi5cbiAgfSxcbiAgYWdncmVnYXRpb246IHtcbiAgICAvLyBleGVjdXRlICYgaW5jbHVkZSBvciBkb24ndCBleGVjdXRlICYgZXhjbHVkZSBmcm9tIGFnZ3JlZ2F0ZWQgcmVzdWx0cy5cbiAgICBpbmNsdWRlOiAncHJvY2VzcyZpbmNsdWRlJyxcbiAgICBleGNsdWRlOiAncHJvY2VzcyZleGNsdWRlJyxcbiAgICBza2lwOiAnc2tpcFByb2Nlc3MnLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgdHJhdmVyc2FsT3B0aW9uID0gWydwcm9jZXNzTm9kZScsICdwb3J0Tm9kZScsICdhZ2dyZWdhdG9yJywgJ3RyYXZlcnNhbEludGVyY2VwdGlvbiddXG5cbmV4cG9ydCBjb25zdCByZXJvdXRlUHJvcGVydHkgPSB7XG4gIGV4dGVybmFsUmVmZXJlbmNlTm9kZUtleTogJ2V4dGVybmFsUmVmZXJlbmNlTm9kZUtleScsXG59XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VQcm9wZXJ0eSA9IHtcbiAgcmVzb2x1dGlvbkltcGxlbWVudGF0aW9uOiBbJ3NlbGVjdGlvbicsICdub2RlJ10sXG59XG5cbmV4cG9ydCBjb25zdCB2YWx1ZVByb3BlcnR5ID0ge1xuICB0eXBlOiBbJ2NvbmRpdGlvblN1YmdyYXBoJywgJ3Byb3BlcnRpZXMnLCAnbm9kZScsICd2YWx1ZVByb3BlcnR5J10sXG59XG5cbmV4cG9ydCBjb25zdCByZXNvdXJjZVByb3BlcnR5ID0ge1xuICBjb250ZXh0OiBbJ2FwcGxpY2F0aW9uUmVmZXJlbmNlJywgJ2ZpbGVzeXN0ZW1SZWZlcmVuY2UnXSxcbn1cblxuZXhwb3J0IGNvbnN0IGNhc2VQcm9wZXJ0eSA9IFsnZXhwZWN0ZWQnXVxuXG5leHBvcnQgY29uc3QgZm9ya1Byb3BlcnR5ID0geyBoYW5kbGVQcm9wYWdhdGlvbkltcGxlbWVudGF0aW9uOiBbJ2Nocm9ub2xvZ2ljYWwnLCAncmFjZUZpcnN0UHJvbWlzZScsICdhbGxQcm9taXNlJ10gfVxuXG5leHBvcnQgY29uc3QgZnVuY3Rpb25Qcm9wZXJ0eSA9IFsnZnVuY3Rpb25OYW1lJ11cbiJdfQ==