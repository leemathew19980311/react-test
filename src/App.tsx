import Box from "./components/box/box"
import IconClock from './assets/icon-clock.svg'
import IconReading from './assets/icon-reading.svg'
import IconClick from './assets/icon-click.svg'
import { WithCursor } from "./components/cursor/cursor"
import { BoxType } from "./App.type"

function App() {
  //四个卡片
  const list = [
    <div className="flex flex-col h-full">
      <p className='box1-top'></p>
      <h2 className="box1-title">Introduction to programming</h2>
      <div className="flex items-center">
        <span className="box1-tag">Beginner</span>
      </div>
      <span className="box1-detail">This course covers the most basic concepts in programming using Solidity as an example.</span>
      <div className="box1-bottom">
        <img src={IconClock} alt="" className='mr-2' />
        <span className="box1-bottom-text">36 Hour</span>
        <img src={IconReading} alt="" className="mr-2" />
        <span className="box1-bottom-text">5 Course</span>
        <div className="box1-bottom-submit">
          <img src={IconClick} alt="" />
          <span>45% COMPLETED</span>
        </div>
      </div>
    </div>,
    <div className="flex flex-col h-full">
      <h2 className="box2-title">Moonshot 2023 Summer Hackathon</h2>
      <div className="flex items-center">
        <span className="box1-tag">Beginner</span>
        <span className="box1-tag">Solidity</span>
        <span className="box1-tag">ZK</span>
      </div>
      <div className="box2-bottom">
        <div className="box2-form-item">
          <span className="box2-form-item-left">Signup</span>
          <span className="box2-form-item-right">4/15 - 6/15</span>
        </div>
        <div className="box2-form-item">
          <span className="box2-form-item-left">Event</span>
          <span className="box2-form-item-right">6/15 - 7/15</span>
        </div>
        <div className="box2-form-item">
          <span className="box2-form-item-left">Grant size</span>
          <span className="box2-form-item-right">200K</span>
        </div>
      </div>
    </div>,
    <div className="flex flex-col h-full">
      <p className='box3-top'></p>
      <h2 className="box1-title">Web 3.0 Programming Basics</h2>
      <div className="flex items-center">
        <span className="box1-tag">Beginner</span>
      </div>
      <span className="box1-detail">Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</span>
      <div className="box1-bottom">
        <img src={IconClock} alt="" className='mr-2' />
        <span className="box1-bottom-text">36 Hour</span>
        <img src={IconReading} alt="" className="mr-2" />
        <span className="box1-bottom-text">5 Course</span>
      </div>
    </div>,
    <div className="flex flex-col h-full box4 relative">
      <p className='box4-top'></p>
      <h3 className="box4-title">What is Bitcoin</h3>
      <div className="box4-bottom">
        <img src={IconClock} alt="" className='mr-2' />
        <span className="box1-bottom-text">36 Hour</span>
      </div>
    </div>,
  ]
  return (
    <WithCursor>
      {
        list.map((child, index) => {
          return <Box key={`box${index + 1}`} boxType={`box${index + 1}` as BoxType} children={child} />
        })
      }
    </WithCursor>
  )
}

export default App
