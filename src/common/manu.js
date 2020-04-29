let manu =  [
    {
        name: '表格1-4',
        path: '/table1-4',
        children: [
          {
            name: '表1',
            path: '/table/table1',
          },
          {
            name: '表2',
            path: '/table/table2',
          },
          {
            name: '表3-3',
            path: '/table/table3',
            children: [
              {
                name: '表3',
                path: '/table/table3',
              },
              {
                name: '表4-4',
                path: '/table/table4',
                children: [
                  {
                    name: '表4',
                    path: '/table/table4',
                  },
                ]
              },
            ]
          },
          
        ]
      },
      {
        name: '表格5-6',
        path: '/table5-6',
        children: [
          {
            name: '表5',
            path: '/table/table5',
          },
          {
            name: '表6',
            path: '/table/table6',
          },
        ]
      },
      {
        name: '表格7-8',
        path: '/table7-8',
        children: [
          {
            name: '表7',
            path: '/table/table7',
          },
          {
            name: '表8',
            path: '/table/table8',
          },
        ]
    },
]

creatOpens(manu);

function creatOpens(arr,opens=[],names=[]) {
  arr.map((e) => {
    if(e.children){
      creatOpens(e.children,[...opens,e.path],[...names,e.name])
    }else{
      e.opens = [...opens,e.path]
      e.names = [...names,e.name]
    }
  })
}

window.console.log(manu)

export default manu