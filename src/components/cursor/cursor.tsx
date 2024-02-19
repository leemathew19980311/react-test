/*
 * @Author: leemathew leemathew1998@gmail.com
 * @Date: 2024-02-19 18:26:51
 * @LastEditors: leemathew leemathew1998@gmail.com
 * @LastEditTime: 2024-02-19 21:31:37
 * @FilePath: /vite-react-ts-tailwind-main/src/components/cursor.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useRef, useState } from "react"
import { CursorEvent } from "../../App.type"
import './cursor.css'
export const WithCursor = function (props: any) {
  //监听滚动的dom
  const boxContainerRef = useRef<HTMLDivElement | null>(null)
  //是否需要展示左右两侧按钮
  const [cursorType, setCursorType] = useState<CursorEvent>(CursorEvent.NONE)
  //滚动函数，TODO 加节流
  const handleScroll = () => {
    const container = boxContainerRef.current
    if(!container) return
    const isAtLeftEdge = container.scrollLeft === 0
    const isAtRightEdge = container.scrollLeft + container.clientWidth === container.scrollWidth

    if (isAtLeftEdge) {
      setCursorType(CursorEvent.LEFT)
      return
    }

    if (isAtRightEdge) {
      setCursorType(CursorEvent.RIGHT)
      return
    }
    //其他情况默认全部显示
    setCursorType(CursorEvent.ALL)
  };
  //点击跳转
  const handleCursorClick = (type: CursorEvent) => {
    const container = boxContainerRef.current
    if(!container) return
    if (type === CursorEvent.LEFT) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else if (type === CursorEvent.RIGHT) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth'
      })
    }
  }
  useEffect(() => {
    // 添加滚动事件监听器
    boxContainerRef.current?.addEventListener('scroll', handleScroll)
    handleScroll()
    // 在组件卸载时移除事件监听器
    return () => {
      boxContainerRef.current?.removeEventListener('scroll', handleScroll)
    };
  }, [])
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <div ref={boxContainerRef} className='w-screen h-screen relative flex items-center overflow-x-auto whitespace-nowrap box-container'>
        {/* 左侧 */}
        {
          cursorType !== CursorEvent.LEFT && <div className='left-arrow fixed left-8 rotate-180 z-50' onClick={() => handleCursorClick(CursorEvent.LEFT)}>
            <svg className='default-svg' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.6" fill="black" stroke="#676767" stroke-width="0.8" />
              <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel" />
            </svg>
            <svg className='hovered-svg hidden' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#303030" />
              <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel" />
            </svg>
          </div>
        }
        {/* 卡片 */}
        {
          props.children
        }
        {/* 右侧 */}
        {
          cursorType !== CursorEvent.RIGHT && <div className='right-arrow fixed right-8 z-50' onClick={() => handleCursorClick(CursorEvent.RIGHT)}>
            <svg className='default-svg' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.6" fill="black" stroke="#676767" stroke-width="0.8" />
              <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel" />
            </svg>
            <svg className='hovered-svg hidden' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#303030" />
              <path d="M19 16L30 24L19 32" stroke="white" stroke-width="2" stroke-linejoin="bevel" />
            </svg>
          </div>
        }
      </div>
    </div>
  )
}
