import React, { useState } from 'react'

export default function Voucher() {
  const [val, setVal] = useState('')
  const [list, setList] = useState([{
    name: 'test1'
  }, {
    name: 'test2'
  }, {
    name: 'test3'
  }, {
    name: 'test4'
  }])
  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <div className="vouches">
        {
          list.filter(v => v.name.includes(val)).map(v => {
            return <div>
              <p>{v.name}</p>
              <p>可用</p>
            </div>
          })
        }
      </div>
    </div>
  )
}
