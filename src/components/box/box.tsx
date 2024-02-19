/*
 * @Author: leemathew leemathew1998@gmail.com
 * @Date: 2024-02-19 17:59:56
 * @LastEditors: leemathew leemathew1998@gmail.com
 * @LastEditTime: 2024-02-19 21:31:50
 * @FilePath: /vite-react-ts-tailwind-main/src/box.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './box.css'
import box1 from '../../assets/box1.svg';
import box2 from '../../assets/box2.svg';
import box3 from '../../assets/box3.svg';
import box4 from '../../assets/box4.svg';
import box1Hover from '../../assets/box1-hover.png';
import box2Hover from '../../assets/box2-hover.png';
import box3Hover from '../../assets/box3-hover.png';
import box4Hover from '../../assets/box4-hover.png';
import { useState } from 'react';
import { BoxType } from '../../App.type';

const boxMap = {
    box1Hover,
    box2Hover,
    box3Hover,
    box4Hover,
    box1,
    box2,
    box3,
    box4
}
interface IProps {
    boxType: BoxType,
    children: React.ReactNode
}
function Box(props: IProps) {
    const { boxType, children } = props
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div key={boxType} className={`box-container shrink-0 relative mr-16 `} style={{ width: 'auto', height: 'auto', marginLeft: boxType === BoxType.BOX1 ? '4rem' : '' }} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={boxMap[boxType]} className={`relative z-20 ${isHovered ? 'hovered-class' : ''}`} />
            {isHovered && <img src={boxMap[`${boxType}Hover`]} className='absolute z-10 top-0 right-0' />}
            <div className={`absolute top-0 right-0 w-full h-full p-6 z-40 ${isHovered ? 'hovered-class' : ''}`}>
                {children}
            </div>
        </div>
    )
}
export default Box