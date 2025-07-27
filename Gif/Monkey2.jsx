import React from 'react'

const Monkey2 = () => {
  return (
    <div><div className="flex flex-col rounded-xl  p-4 shadow-2xl shadow-zinc-950"
    style={{
      border: '0.88px solid',
    
      backdropFilter: 'saturate(180%) blur(14px)',
      background: ' #ffffff0d',
    }}
    >
    <div>
      <img
        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
        alt="nft-gif"
        width="400"
        height="400"
        className="rounded-xl"
      />
    </div>
    <div className="flex flex-col  rounded-b-xl py-4 ">
      <div className="flex justify-between">
        <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
        <h1 className="font-bold font-RubikBold">Price</h1>
      </div>
      <div className="flex  justify-between font-mono">
        <p>#2</p>
        <p>0.01</p>
      </div>
    </div>
    </div></div>
  )
}

export default Monkey2