import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [ 
  { option: '0' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5' }, 
  { option: '6' }, 
  { option: '7' }, 
  { option: '8' }, 
  { option: '9' }, 
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
    <div className='flex mx-auto justify-center cursor-pointer w-fit rounded-full relative ' onClick={handleSpinClick}
    >
      {/* <div className='-rotate-45 h-fit w-fit rounded-full'>
        <img src="/pointer.png" alt="" className='h-16 -rotate-90 '/>
      </div> */}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        backgroundColors={[
          '#552234',
          '#a8d3f7', 
          '#89276C',
          '#f8e8e5',
        ]}
        textColors={['#ffffff','#592839']}
        outerBorderColor={'#F7F7F7'}
        radiusLineColor={'#F7F7F7'}
        radiusLineWidth={0}
        innerRadius={14}
      />
    </div>
    <button onClick={handleSpinClick} className='btn flex mx-auto border p-2 px-4'>SPIN</button>
    </>
  )
}