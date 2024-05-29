"use client"
// import "../components/style.css";
// import { motion, Variants, useScroll  } from "framer-motion";   

// interface Props {
//   emoji: string;
//   hueA: number;
//   hueB: number;
// }

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300
//   },
//   onscreen: {
//     y: 50,
//     rotate: 10,
//     transition: {
//       type: "spring",
//       bounce: 0.8,
//       duration: 0.8
//     }
//   }
// };

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// function Card({ emoji, hueA, hueB }: Props) {
//   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

//   return (
//     <motion.div
//       className="card-container"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{  amount: 0.8 }}
//     >
//       <div className="splash" style={{ background }} />
//       <motion.div className="card" variants={cardVariants}>
//         {emoji}
//       </motion.div>
//     </motion.div>
//   );
// }

// const food: [string, number, number][] = [
//   ["🍅", 340, 10],
//   ["🍊", 20, 40],
//   ["🍋", 60, 90],
//   ["🍐", 80, 120],
//   ["🍏", 100, 140],
//   ["❤", 205, 245],
//   ["🍆", 260, 290],
//   ["🍇", 290, 320]
// ];

// export default function scroll() {
//   return food.map(([emoji, hueA, hueB]) => (
//     <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//   ));
// }



import React, { useState, useEffect } from 'react';
interface GridItem {
  id: number;
  color: string;
  colSpan: number;
  rowSpan: number;
  text: string;
}

const generateGridItem = (id: number): GridItem => {
  const color = `bg-gray-${Math.floor(Math.random() * 8 + 2)}00`;
  const rowSpan = (id % 3 === 2) ? 2 : 1;
  return {
    id,
    color,
    colSpan: 1,
    rowSpan,
    text: `${id}`,
  };
};

interface DynamicGridProps {
  initialData: GridItem[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ initialData }) => {
  const [gridItems, setGridItems] = useState<GridItem[]>(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridItems(prevItems => [
        ...prevItems,
        generateGridItem(prevItems.length + 1)
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!gridItems) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div className="grid grid-cols-3 auto-rows-auto gap-6 p-8">
      {gridItems.map(item => (
        <div
          key={item.id}
          className={`${item.color} col-span-${item.colSpan} row-span-${item.rowSpan} p-8 text-center`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DynamicGrid;