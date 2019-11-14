"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.traverseSubgraphTemplate = traverseSubgraphTemplate;



async function traverseSubgraphTemplate({ nodeInstance, graphInstance = this }) {
  const { root, extend, insertArray } = await graphInstance.databaseWrapper.getSubgraphTemplateElement({ concreteDatabase: graphInstance.database, nodeID: nodeInstance.identity });
  if (!root && !extend) return false;


  let additionalChildNode = insertArray.
  sort((former, latter) => former.connection.properties.order - latter.connection.properties.order).
  map(insert => {var _insert$connection$pr, _insert$connection$pr2;return {
      node: insert.source,
      placement: {

        position: (_insert$connection$pr = insert.connection.properties) === null || _insert$connection$pr === void 0 ? void 0 : _insert$connection$pr.placement[0],
        connectionKey: (_insert$connection$pr2 = insert.connection.properties) === null || _insert$connection$pr2 === void 0 ? void 0 : _insert$connection$pr2.placement[1] } };});




  let rootNode;
  if (root) rootNode = root.destination;else
  if (extend) rootNode = extend.destination;

  return { rootNode, additionalChildNode };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb25zdHJ1Y3RhYmxlL0dyYXBoL21ldGhvZC9zdWJncmFwaFRlbXBsYXRlTm9kZS5qcyJdLCJuYW1lcyI6WyJ0cmF2ZXJzZVN1YmdyYXBoVGVtcGxhdGUiLCJub2RlSW5zdGFuY2UiLCJncmFwaEluc3RhbmNlIiwicm9vdCIsImV4dGVuZCIsImluc2VydEFycmF5IiwiZGF0YWJhc2VXcmFwcGVyIiwiZ2V0U3ViZ3JhcGhUZW1wbGF0ZUVsZW1lbnQiLCJjb25jcmV0ZURhdGFiYXNlIiwiZGF0YWJhc2UiLCJub2RlSUQiLCJpZGVudGl0eSIsImFkZGl0aW9uYWxDaGlsZE5vZGUiLCJzb3J0IiwiZm9ybWVyIiwibGF0dGVyIiwiY29ubmVjdGlvbiIsInByb3BlcnRpZXMiLCJvcmRlciIsIm1hcCIsImluc2VydCIsIm5vZGUiLCJzb3VyY2UiLCJwbGFjZW1lbnQiLCJwb3NpdGlvbiIsImNvbm5lY3Rpb25LZXkiLCJyb290Tm9kZSIsImRlc3RpbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7O0FBSU8sZUFBZUEsd0JBQWYsQ0FBd0MsRUFBRUMsWUFBRixFQUFnQkMsYUFBYSxHQUFHLElBQWhDLEVBQXhDLEVBQWdGO0FBQ3JGLFFBQU0sRUFBRUMsSUFBRixFQUFRQyxNQUFSLEVBQWdCQyxXQUFoQixLQUFnQyxNQUFNSCxhQUFhLENBQUNJLGVBQWQsQ0FBOEJDLDBCQUE5QixDQUF5RCxFQUFFQyxnQkFBZ0IsRUFBRU4sYUFBYSxDQUFDTyxRQUFsQyxFQUE0Q0MsTUFBTSxFQUFFVCxZQUFZLENBQUNVLFFBQWpFLEVBQXpELENBQTVDO0FBQ0EsTUFBSSxDQUFDUixJQUFELElBQVMsQ0FBQ0MsTUFBZCxFQUFzQixPQUFPLEtBQVA7OztBQUd0QixNQUFJUSxtQkFBbUIsR0FBR1AsV0FBVztBQUNsQ1EsRUFBQUEsSUFEdUIsQ0FDbEIsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEtBQW9CRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLFVBQWxCLENBQTZCQyxLQUE3QixHQUFxQ0gsTUFBTSxDQUFDQyxVQUFQLENBQWtCQyxVQUFsQixDQUE2QkMsS0FEcEU7QUFFdkJDLEVBQUFBLEdBRnVCLENBRW5CQyxNQUFNLDhEQUFLO0FBQ2RDLE1BQUFBLElBQUksRUFBRUQsTUFBTSxDQUFDRSxNQURDO0FBRWRDLE1BQUFBLFNBQVMsRUFBRTs7QUFFVEMsUUFBQUEsUUFBUSwyQkFBRUosTUFBTSxDQUFDSixVQUFQLENBQWtCQyxVQUFwQiwwREFBRSxzQkFBOEJNLFNBQTlCLENBQXdDLENBQXhDLENBRkQ7QUFHVEUsUUFBQUEsYUFBYSw0QkFBRUwsTUFBTSxDQUFDSixVQUFQLENBQWtCQyxVQUFwQiwyREFBRSx1QkFBOEJNLFNBQTlCLENBQXdDLENBQXhDLENBSE4sRUFGRyxFQUFMLEVBRmEsQ0FBMUI7Ozs7O0FBWUEsTUFBSUcsUUFBSjtBQUNBLE1BQUl2QixJQUFKLEVBQVV1QixRQUFRLEdBQUd2QixJQUFJLENBQUN3QixXQUFoQixDQUFWO0FBQ0ssTUFBSXZCLE1BQUosRUFBWXNCLFFBQVEsR0FBR3RCLE1BQU0sQ0FBQ3VCLFdBQWxCOztBQUVqQixTQUFPLEVBQUVELFFBQUYsRUFBWWQsbUJBQVosRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWJncmFwaFRlbXBsYXRlIG5vZGUgaXMgYW4gZW50cnlwb2ludCBub2RlIHRoYXQgdGhlIGdyYXBoIHRyYXZlcnNhbCBjYW4gYmUgc3RhcnRlZCBmcm9tLlxuICogbG9hZCBgc3ViZ3JhcGggdGVtcGxhdGVgIG5vZGUgcGFyYW1ldGVycyBmb3IgdHJhdmVyc2FsIGNhbGwgdXNhZ2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0cmF2ZXJzZVN1YmdyYXBoVGVtcGxhdGUoeyBub2RlSW5zdGFuY2UsIGdyYXBoSW5zdGFuY2UgPSB0aGlzIH0pIHtcbiAgY29uc3QgeyByb290LCBleHRlbmQsIGluc2VydEFycmF5IH0gPSBhd2FpdCBncmFwaEluc3RhbmNlLmRhdGFiYXNlV3JhcHBlci5nZXRTdWJncmFwaFRlbXBsYXRlRWxlbWVudCh7IGNvbmNyZXRlRGF0YWJhc2U6IGdyYXBoSW5zdGFuY2UuZGF0YWJhc2UsIG5vZGVJRDogbm9kZUluc3RhbmNlLmlkZW50aXR5IH0pXG4gIGlmICghcm9vdCAmJiAhZXh0ZW5kKSByZXR1cm4gZmFsc2UgLy8gaW4gY2FzZSBubyBgUk9PVGAgcmVsYXRpb24gb3IgYEVYVEVORGAgYXJlIHByZXNlbnRcblxuICAvLyBnZXQgYWRkaXRpb25hbCBub2Rlc1xuICBsZXQgYWRkaXRpb25hbENoaWxkTm9kZSA9IGluc2VydEFycmF5XG4gICAgLnNvcnQoKGZvcm1lciwgbGF0dGVyKSA9PiBmb3JtZXIuY29ubmVjdGlvbi5wcm9wZXJ0aWVzLm9yZGVyIC0gbGF0dGVyLmNvbm5lY3Rpb24ucHJvcGVydGllcy5vcmRlcikgLy8gdXNpbmcgYG9yZGVyYCBwcm9wZXJ0eSAvLyBCdWxrIGFjdGlvbnMgb24gZm9ya3MgLSBzb3J0IGZvcmtzXG4gICAgLm1hcChpbnNlcnQgPT4gKHtcbiAgICAgIG5vZGU6IGluc2VydC5zb3VyY2UsXG4gICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgLy8gY29udmVudGlvbiBmb3IgZGF0YSBzdHJ1Y3R1cmUgb2YgcGxhY2VtZW50IGFycmF5IC0gMDogJ2JlZm9yZScgfCAnYWZ0ZXInLCAxOiBjb25uZWN0aW9uS2V5XG4gICAgICAgIHBvc2l0aW9uOiBpbnNlcnQuY29ubmVjdGlvbi5wcm9wZXJ0aWVzPy5wbGFjZW1lbnRbMF0sXG4gICAgICAgIGNvbm5lY3Rpb25LZXk6IGluc2VydC5jb25uZWN0aW9uLnByb3BlcnRpZXM/LnBsYWNlbWVudFsxXSxcbiAgICAgIH0sXG4gICAgfSkpXG5cbiAgLy8gZ2V0IHJvb3ROb2RlIGFuZCBoYW5kbGUgZXh0ZW5kZWQgbm9kZS4gcm9vdE5vZGUgd2lsbCBiZSB1c2VkIGFzIGVudHJ5cG9pbnQgdG8gdHJhdmVyc2FsIGNhbGxcbiAgbGV0IHJvb3ROb2RlXG4gIGlmIChyb290KSByb290Tm9kZSA9IHJvb3QuZGVzdGluYXRpb25cbiAgZWxzZSBpZiAoZXh0ZW5kKSByb290Tm9kZSA9IGV4dGVuZC5kZXN0aW5hdGlvblxuXG4gIHJldHVybiB7IHJvb3ROb2RlLCBhZGRpdGlvbmFsQ2hpbGROb2RlIH1cbn1cbiJdfQ==