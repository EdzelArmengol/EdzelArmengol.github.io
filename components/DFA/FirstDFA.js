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
      {/* q1 q2 */}
      <Text size="label" top="4%" left="6.5%">
        a, b
      </Text>


    
      
      {/* ARROW BODY */}
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "5em"]}
        top={["16%", "16%", "16%", "16%", "16%", "16%"]}
        left="6%"
        rotate="0"
      />

      {/* q2 q3 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "5em"]}
        top={["7%", "7%", "7%", "7%", "7%", "-7%"]}
        left="16%"
        rotate="135"
      />

      {/* q2 q4 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "5em"]}
        top={["0%", "0%", "0%", "0%", "0%", "30%"]}
        left="16%"
        rotate="45"
      />

      {/* q3 q5 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "7em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-40%"]}
        left="27%"
        rotate="140"
      />

      {/* q3 q4 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "10em"]}
        top={["0%", "0%", "0%", "0%", "0%", "10%"]}
        left="19.5%"
        rotate="90"
      />

      {/* q4 q3 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "10em"]}
        top={["0%", "0%", "0%", "0%", "0%", "10%"]}
        left="21.5%"
        rotate="90"
      />

      {/* q4 q8 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "14em"]}
        top={["0%", "0%", "0%", "0%", "0%", "50.5%"]}
        left="31%"
        rotate="0"
      />

      {/* q5 q7 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-20%"]}
        left="31.8%"
        rotate="90"
      />

      {/* q5 q6 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-65%"]}
        left="37%"
        rotate="140"
      />

      {/* q6 q11 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "20em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-35%"]}
        left="58%"
        rotate="40"
      />
      
      {/* q7 q8 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "11em"]}
        top={["0%", "0%", "0%", "0%", "0%", "20%"]}
        left="37%"
        rotate="45"
      />

      {/* q7 q11 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "23em"]}
        top={["0%", "0%", "0%", "0%", "0%", "6%"]}
        left="52%"
        rotate="0"
      />

      {/* q8 q9 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "9em"]}
        top={["0%", "0%", "0%", "0%", "0%", "51%"]}
        left="41%"
        rotate="140"
      />

      {/* q8 q10 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "51%"]}
        left="54%"
        rotate="0"
      />

      {/* q9 q3 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "18em"]}
        top={["0%", "0%", "0%", "0%", "0%", "30%"]}
        left="27%"
        rotate="70"
      />

      {/* q9 q11 horizontal */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "22em"]}
        top={["0%", "0%", "0%", "0%", "0%", "81%"]}
        left="54.8%"
        rotate="0"
      />

      {/* q9 q11 vertical */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "15em"]}
        top={["0%", "0%", "0%", "0%", "0%", "34%"]}
        left="71.5%"
        rotate="90"
      />

      {/* q10 q11 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "10em"]}
        top={["0%", "0%", "0%", "0%", "0%", "23%"]}
        left="65%"
        rotate="135"
      />

      {/* q11 q12 vertical */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "7em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-30%"]}
        left="71.5%"
        rotate="90"
      />

      {/* q11 q12 horizontal */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "20em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-44%"]}
        left="89.7%"
        rotate="0"
      />

      {/* q11 q15 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "20em"]}
        top={["0%", "0%", "0%", "0%", "0%", "30%"]}
        left="89.7%"
        rotate="23"
      />

      {/* q12 q13 horizontal */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "9em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-44%"]}
        left="117.5%"
        rotate="0"
      />

      {/* q12 q13 vertical */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "7em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-30%"]}
        left="123.5%"
        rotate="90"
      />

      {/* q13 q16 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "7em"]}
        top={["0%", "0%", "0%", "0%", "0%", "5%"]}
        left="117%"
        rotate="0"
      />

      {/* q13 q14 vertical */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "15em"]}
        top={["0%", "0%", "0%", "0%", "0%", "48.8%"]}
        left="123.5%"
        rotate="90"
      />

      {/* q13 q14 horizontal */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "4em"]}
        top={["0%", "0%", "0%", "0%", "0%", "96%"]}
        left="121.9%"
        rotate="0"
      />

      {/* q14 q15 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "75%"]}
        left="112.5%"
        rotate="50"
      />

      {/* q14 q16 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "16em"]}
        top={["0%", "0%", "0%", "0%", "0%", "50%"]}
        left="113%"
        rotate="70"
      />

      {/* q15 q16 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "25%"]}
        left="106.5%"
        rotate="90"
      />

      {/* q16 q12 */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "6em"]}
        top={["0%", "0%", "0%", "0%", "0%", "-25%"]}
        left="106.5%"
        rotate="90"
      />

      {/* q16 q17 bottom */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "10%"]}
        left="99%"
        rotate="0"
      />

      {/* q17 q16 top */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "8em"]}
        top={["0%", "0%", "0%", "0%", "0%", "3%"]}
        left="99%"
        rotate="0"
      />

      {/* q17 q14 vertical */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "15em"]}
        top={["0%", "0%", "0%", "0%", "0%", "49%"]}
        left="88.5%"
        rotate="90"
      />

      {/* q17 q14 horizontal */}
      <ArrowBody
        w={["5em", "5em", "5em", "5em", "5em", "16em"]}
        top={["0%", "0%", "0%", "0%", "0%", "96%"]}
        left="103.4%"
        rotate="0"
      />
      

      {/* ARROW LOOPS */}
      {/* q6 q6 */}
      <ArrowLoopLg
        top={["50%", "50%", "50%", null, null, "-90%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "45%"]}
        rotate="120"
      />

      {/* q10 q10 */}
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "30%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "60%"]}
        rotate="120"
      />

      {/* q12 q12 */}
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "-65%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "108%"]}
        rotate="120"
      />

      {/* q15 q15 */}
      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "37%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "105.5%"]}
        rotate="90"
      />
      

      {/* ARROWHEADS */}
      {/* q1 q2 */}
      <ArrowHead
        top={["29.6%", "29.6%", "29.2%", "29.2%", "20%", "10.7%"]}
        left={["9.5%", "9.5%", "9.5%", null, null, "9.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "0"]}
      />

      {/* q2 q3 */}
      <ArrowHead
        top={["29.6%", "29.6%", "29.2%", "29.2%", "20%", "-11.5%"]}
        left={["16%", "16%", "16%", null, null, "19.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "320"]}
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
        animate={currentNode == 16 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >

     16 {/* q16 */}
      </Atom>


      <Atom
        variant="q17"
        variants={variants}
        initial="initial"
        animate={currentNode == 17 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
      + 17{/* q17 */}
      </Atom>
      
      
    </>
  );
};

export default FirstDFA;
