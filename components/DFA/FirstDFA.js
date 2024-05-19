import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}
      {/* q2 q3 */}
      <Text size="label" top="15%" left="30%">
        b
      </Text>
      {/* q1 q2 */}
      <Text top="31%" left="14%" size="label">
        a
      </Text>
      
      {/* ARROW BODY */}
      {/* q2 q3 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["27%", "27%", "25%", "25%", "25%", "25%"]}
        left="30%"
        rotate="0"
      />
      

      {/* ARROWS */}
      {/* q6 q6 */}
      <ArrowLoopSm
        top={["50%", "50%", "50%", null, null, "50%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "46%"]}
        rotate="360"
      />
      <ArrowLoopLg
        top={["50%", "50%", "50%", null, null, "51%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "45.7%"]}
        rotate="20"
      />
      {/* q7 q7 */}
      <ArrowLoopSm
        top={["20%", "20%", "20%", null, null, "20%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64%"]}
        rotate="180"
      />
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "18.5%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64.3%"]}
        rotate="200"
      />
      
      
      
      {/* q6 q7 */}
      <ArrowHead
        top={["29.6%", "29.6%", "29.2%", "29.2%", "29.2%", "27%"]}
        left={["57.8%", "57.8%", "57.9%", null, null, "57.3%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      />
  
      {/* STATES */}

      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        – 1{/* q1 */}
      </Atom>



      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        2{/* q2 */}
      </Atom>



      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        3{/* q3 */}
      </Atom>



      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        4{/* q4 */}
      </Atom>



      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        5{/* q5 */}
      </Atom>



      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        6{/* q6 */}
      </Atom>



      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        7{/* q7 */}
      </Atom>



      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
       8 {/* q8 */}
      </Atom>



      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        9{/* q9 */}
      </Atom>



      <Atom
        variant="q10"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        10{/* q10 */}
      </Atom>



      <Atom
        variant="q11"
        variants={variants}
        initial="initial"
        animate={currentNode == 11 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        11{/* q11 */}
      </Atom>



      <Atom
        variant="q12"
        variants={variants}
        initial="initial"
        animate={currentNode == 12 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
       12 {/* q12 */}
      </Atom>



      <Atom
        variant="q13"
        variants={variants}
        initial="initial"
        animate={currentNode == 13 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
       13 {/* q13 */}
      </Atom>



      <Atom
        variant="q14"
        variants={variants}
        initial="initial"
        animate={currentNode == 14 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
      + 14{/* q14 */}
      </Atom>



      <Atom
        variant="q15"
        variants={variants}
        initial="initial"
        animate={currentNode == 15 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >

      15{/* q15 */}
      </Atom>



      <Atom
        variant="q16"
        variants={variants}
        initial="initial"
        animate={currentNode == 15 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >

     16 {/* q16 */}
      </Atom>


      <Atom
        variant="q17"
        variants={variants}
        initial="initial"
        animate={currentNode == 15 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
      + 17{/* q17 */}
      </Atom>
      
      
    </>
  );
};

export default FirstDFA;
