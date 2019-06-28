/**
 * Graph basic form with connection :
 * connection - provides all edges of a specific node
 **/
export let nodeArray = [
  {
    label: { name: 'node' },
    key: 'node-key-1',
    dataItem: {
      key: 'dataItem-key-1',
    },
    connection: [
      {
        key: 'connection-key-1', // pathPointerKey
        source: {
          position: {
            order: '1',
            // or
            // placement: { type: 'after/before', connectionKey: 'KeyXXXX', }
          },
        },
        destination: {
          node: [
            {
              key: 'node-key-2',
            },
          ],
        },
        tag: {
          direction: 'outgoing', // 'ingoing'/'outgoing'
        },
      },
    ],
    tag: {},
  },
  {
    label: { name: 'node' },
    key: 'node-key-2',
    dataItem: {
      key: 'dataItem-key-2',
    },
    tag: {},
  },
]
