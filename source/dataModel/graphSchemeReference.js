"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.functionProperty = exports.forkProperty = exports.caseProperty = exports.resourceProperty = exports.valueProperty = exports.referenceProperty = exports.rerouteProperty = exports.traversalOption = exports.evaluationOption = exports.connectionType = exports.nodeLabel = void 0;const nodeLabel = {
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
  case: 'CASE' };exports.connectionType = connectionType;





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9kYXRhTW9kZWwvZ3JhcGhTY2hlbWVSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsibm9kZUxhYmVsIiwic3RhZ2UiLCJwb3J0IiwicHJvY2VzcyIsImNvbmZpZ3VyYXRpb24iLCJmaWxlIiwiZnVuY3Rpb24iLCJyZXJvdXRlIiwiY29ubmVjdGlvblR5cGUiLCJyZWZlcmVuY2UiLCJpbnNlcnQiLCJleHRlbmQiLCJuZXh0IiwiZm9yayIsImNvbmZpZ3VyZSIsImV4ZWN1dGUiLCJwaXBlIiwicmVzb3VyY2UiLCJ2YWx1ZSIsImZhbGxiYWNrIiwic2VsZWN0IiwiY2FzZSIsImV2YWx1YXRpb25PcHRpb24iLCJwcm9wYWdhdGlvbiIsImNvbnRpbnVlIiwiYnJlYWsiLCJodWx0IiwiYWdncmVnYXRpb24iLCJpbmNsdWRlIiwiZXhjbHVkZSIsInNraXAiLCJ0cmF2ZXJzYWxPcHRpb24iLCJyZXJvdXRlUHJvcGVydHkiLCJleHRlcm5hbFJlZmVyZW5jZU5vZGVLZXkiLCJyZWZlcmVuY2VQcm9wZXJ0eSIsInJlc29sdXRpb25JbXBsZW1lbnRhdGlvbiIsInZhbHVlUHJvcGVydHkiLCJ0eXBlIiwicmVzb3VyY2VQcm9wZXJ0eSIsImNvbnRleHQiLCJjYXNlUHJvcGVydHkiLCJmb3JrUHJvcGVydHkiLCJoYW5kbGVQcm9wYWdhdGlvbkltcGxlbWVudGF0aW9uIiwiZnVuY3Rpb25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6InNXQUFPLE1BQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsS0FBSyxFQUFFLE9BRGdCO0FBRXZCQyxFQUFBQSxJQUFJLEVBQUUsTUFGaUI7QUFHdkJDLEVBQUFBLE9BQU8sRUFBRSxTQUhjO0FBSXZCQyxFQUFBQSxhQUFhLEVBQUUsZUFKUTtBQUt2QkMsRUFBQUEsSUFBSSxFQUFFLE1BTGlCO0FBTXZCQyxFQUFBQSxRQUFRLEVBQUUsVUFOYTtBQU92QkMsRUFBQUEsT0FBTyxFQUFFLFNBUGMsRUFBbEIsQzs7Ozs7Ozs7QUFlQSxNQUFNQyxjQUFjLEdBQUc7O0FBRTVCQyxFQUFBQSxTQUFTLEVBQUUsV0FGaUI7QUFHNUJDLEVBQUFBLE1BQU0sRUFBRSxRQUhvQjtBQUk1QkMsRUFBQUEsTUFBTSxFQUFFLFFBSm9COztBQU01QkMsRUFBQUEsSUFBSSxFQUFFLE1BTnNCO0FBTzVCQyxFQUFBQSxJQUFJLEVBQUUsTUFQc0I7O0FBUzVCQyxFQUFBQSxTQUFTLEVBQUUsV0FUaUI7O0FBVzVCQyxFQUFBQSxPQUFPLEVBQUUsU0FYbUI7QUFZNUJDLEVBQUFBLElBQUksRUFBRSxNQVpzQjtBQWE1QkMsRUFBQUEsUUFBUSxFQUFFLFVBYmtCO0FBYzVCQyxFQUFBQSxLQUFLLEVBQUUsT0FkcUI7QUFlNUJDLEVBQUFBLFFBQVEsRUFBRSxVQWZrQjtBQWdCNUJDLEVBQUFBLE1BQU0sRUFBRSxRQWhCb0I7QUFpQjVCQyxFQUFBQSxJQUFJLEVBQUUsTUFqQnNCLEVBQXZCLEM7Ozs7OztBQXVCQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsV0FBVyxFQUFFOztBQUVYQyxJQUFBQSxRQUFRLEVBQUUsVUFGQztBQUdYQyxJQUFBQSxLQUFLLEVBQUUsT0FISTtBQUlYQyxJQUFBQSxJQUFJLEVBQUUsTUFKSyxFQURpQjs7QUFPOUJDLEVBQUFBLFdBQVcsRUFBRTs7QUFFWEMsSUFBQUEsT0FBTyxFQUFFLGlCQUZFO0FBR1hDLElBQUFBLE9BQU8sRUFBRSxpQkFIRTtBQUlYQyxJQUFBQSxJQUFJLEVBQUUsYUFKSyxFQVBpQixFQUF6QixDOzs7O0FBZUEsTUFBTUMsZUFBZSxHQUFHLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixZQUE1QixFQUEwQyx1QkFBMUMsQ0FBeEIsQzs7QUFFQSxNQUFNQyxlQUFlLEdBQUc7QUFDN0JDLEVBQUFBLHdCQUF3QixFQUFFLDBCQURHLEVBQXhCLEM7OztBQUlBLE1BQU1DLGlCQUFpQixHQUFHO0FBQy9CQyxFQUFBQSx3QkFBd0IsRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLENBREssRUFBMUIsQzs7O0FBSUEsTUFBTUMsYUFBYSxHQUFHO0FBQzNCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixZQUF0QixFQUFvQyxNQUFwQyxFQUE0QyxlQUE1QyxDQURxQixFQUF0QixDOzs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUM5QkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsc0JBQUQsRUFBeUIscUJBQXpCLENBRHFCLEVBQXpCLEM7OztBQUlBLE1BQU1DLFlBQVksR0FBRyxDQUFDLFVBQUQsQ0FBckIsQzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsRUFBRUMsK0JBQStCLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixFQUFzQyxZQUF0QyxDQUFuQyxFQUFyQixDOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLENBQUMsY0FBRCxDQUF6QixDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vZGVMYWJlbCA9IHtcbiAgc3RhZ2U6ICdTdGFnZScsXG4gIHBvcnQ6ICdQb3J0JyxcbiAgcHJvY2VzczogJ1Byb2Nlc3MnLFxuICBjb25maWd1cmF0aW9uOiAnQ29uZmlndXJhdGlvbicsXG4gIGZpbGU6ICdGaWxlJyxcbiAgZnVuY3Rpb246ICdGdW5jdGlvbicsXG4gIHJlcm91dGU6ICdSZXJvdXRlJyxcbiAgLy8gZXZhbHVhdGlvbjogJ0V2YWx1YXRpb24nLFxuICAvLyBzdWJncmFwaFRlbXBsYXRlOiAnU3ViZ3JhcGhUZW1wbGF0ZScsXG4gIC8vIG5vZGVSZWZlcmVuY2U6ICdOb2RlUmVmZXJlbmNlJyxcbiAgLy8gc3dpdGNoOiAnU3dpdGNoJyxcbiAgLy8gc3dpdGNoQm9vbGVhbjogJ1N3aXRjaEJvb2xlYW4nLFxufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdGlvblR5cGUgPSB7XG4gIC8vIFJlcm91dGVcbiAgcmVmZXJlbmNlOiAnUkVGRVJFTkNFJyxcbiAgaW5zZXJ0OiAnSU5TRVJUJyxcbiAgZXh0ZW5kOiAnRVhURU5EJyxcbiAgLy8gU3RhZ2VcbiAgbmV4dDogJ05FWFQnLFxuICBmb3JrOiAnRk9SSycsXG4gIC8vVE9ETzogaW1wbGVtZW50IGBkZXB0aEFmZmVjdGVkYCBwcm9wZXJ0eSBmb3IgQ09ORklHVVJFIGNvbm5lY3Rpb25cbiAgY29uZmlndXJlOiAnQ09ORklHVVJFJyxcbiAgLy8gUHJvY2VzcyAmIEV2YWx1YXRpb25cbiAgZXhlY3V0ZTogJ0VYRUNVVEUnLFxuICBwaXBlOiAnUElQRScsXG4gIHJlc291cmNlOiAnUkVTT1VSQ0UnLFxuICB2YWx1ZTogJ1ZBTFVFJywgLy8ge3R5cGU6ICdub2RlJyB8fCAncHJvcGVydGllcyd9IGkuZS4gcmV0dXJuIHRoZSBub2RlIHJlZmVyZW5jZSBvciByZXR1cm4gaXRzIHByb3BlcnRpZXMuXG4gIGZhbGxiYWNrOiAnRkFMTEJBQ0snLFxuICBzZWxlY3Q6ICdTRUxFQ1QnLFxuICBjYXNlOiAnQ0FTRScsXG4gIC8vIHJvb3Q6ICdST09UJyxcbiAgLy8gcnVuOiAnUlVOJywgLy8gcnVuIGFzIHN1YmdyYXBoIHdoZXJlIHRoZSByZXN1bHQgb2YgdGhlIHN1YmdyYXBoIHRyYXZlcnNhbCBpcyB0byBiZSB1c2VkIGluIHRoZSBzdGFnZSBub2RlIGNhbGxpbmcgaXQuXG4gIC8vIGluaGVyaXQ6ICdJTkhFUklUJyxcbn1cblxuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25PcHRpb24gPSB7XG4gIHByb3BhZ2F0aW9uOiB7XG4gICAgLy8gdHJhdmVyc2UgbmVpZ2hib3VycyBvciBub3QuXG4gICAgY29udGludWU6ICdjb250aW51ZScsIC8vIGNvbnRpbnVlIHRyYXZlcnNhbCBvZiBjaGlsZCBub2Rlc1xuICAgIGJyZWFrOiAnYnJlYWsnLCAvLyBkbyBub3QgdHJhdmVyc2Ugc3VicHJvY2Vzc1xuICAgIGh1bHQ6ICdodWx0JywgLy8gaHVsdCB0cmF2ZXJzYWwgYWxsIHRvZ2V0aGVyIGFuZCByZXR1cm4uXG4gIH0sXG4gIGFnZ3JlZ2F0aW9uOiB7XG4gICAgLy8gZXhlY3V0ZSAmIGluY2x1ZGUgb3IgZG9uJ3QgZXhlY3V0ZSAmIGV4Y2x1ZGUgZnJvbSBhZ2dyZWdhdGVkIHJlc3VsdHMuXG4gICAgaW5jbHVkZTogJ3Byb2Nlc3MmaW5jbHVkZScsXG4gICAgZXhjbHVkZTogJ3Byb2Nlc3MmZXhjbHVkZScsXG4gICAgc2tpcDogJ3NraXBQcm9jZXNzJyxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IHRyYXZlcnNhbE9wdGlvbiA9IFsncHJvY2Vzc05vZGUnLCAncG9ydE5vZGUnLCAnYWdncmVnYXRvcicsICd0cmF2ZXJzYWxJbnRlcmNlcHRpb24nXVxuXG5leHBvcnQgY29uc3QgcmVyb3V0ZVByb3BlcnR5ID0ge1xuICBleHRlcm5hbFJlZmVyZW5jZU5vZGVLZXk6ICdleHRlcm5hbFJlZmVyZW5jZU5vZGVLZXknLFxufVxuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlUHJvcGVydHkgPSB7XG4gIHJlc29sdXRpb25JbXBsZW1lbnRhdGlvbjogWydzZWxlY3Rpb24nLCAnbm9kZSddLFxufVxuXG5leHBvcnQgY29uc3QgdmFsdWVQcm9wZXJ0eSA9IHtcbiAgdHlwZTogWydjb25kaXRpb25TdWJncmFwaCcsICdwcm9wZXJ0aWVzJywgJ25vZGUnLCAndmFsdWVQcm9wZXJ0eSddLFxufVxuXG5leHBvcnQgY29uc3QgcmVzb3VyY2VQcm9wZXJ0eSA9IHtcbiAgY29udGV4dDogWydhcHBsaWNhdGlvblJlZmVyZW5jZScsICdmaWxlc3lzdGVtUmVmZXJlbmNlJ10sXG59XG5cbmV4cG9ydCBjb25zdCBjYXNlUHJvcGVydHkgPSBbJ2V4cGVjdGVkJ11cblxuZXhwb3J0IGNvbnN0IGZvcmtQcm9wZXJ0eSA9IHsgaGFuZGxlUHJvcGFnYXRpb25JbXBsZW1lbnRhdGlvbjogWydjaHJvbm9sb2dpY2FsJywgJ3JhY2VGaXJzdFByb21pc2UnLCAnYWxsUHJvbWlzZSddIH1cblxuZXhwb3J0IGNvbnN0IGZ1bmN0aW9uUHJvcGVydHkgPSBbJ2Z1bmN0aW9uTmFtZSddXG4iXX0=