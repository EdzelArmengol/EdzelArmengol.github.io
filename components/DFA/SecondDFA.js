import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowHead, ArrowLoop, ArrowBody } from "../components/Arrows";

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

const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* q3 q5 */}
      <Text size="label" top="27%" left="60%">
        1
      </Text>
      {/* q3 q7 */}
      <Text size="label" top="45%" left="60%">
        0
      </Text>
      

      
      
      {/* q2 q4 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["36%", null, "38%", null, null, "38%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* q6 q3 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["56%", null, "58%", null, null, "58%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["29%", null, "30%", null, null, "29%"]}
        left={["56%", null, "58%", null, null, "58%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />
      {/* q5 q8 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["27%", null, "29%", null, null, "29%"]}
        left={["84%", null, "82%", null, null, "82%"]}
        rotate={["227", null, "220", null, null, "208"]}
      />
      {/* q4 q6 */}
      <ArrowBody
        w={["3em", null, "5em", null, null, "9em"]}
        top={["93%", null, "90%", null, null, "91%"]}
        left="60%"
      />
      {/* q6 q8 */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["65%", null, "65%", null, null, "65%"]}
        left={["75%", null, "77.5%", null, null, "79%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />
      {/* q7 q8 */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["84.3%", null, "85.3%", null, null, "86.6%"]}
      />
      {/* q3 q7 */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["64.2%", null, "65.3%", null, null, "66.6%"]}
      />
      {/* q2 q3 */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["44.3%", null, "45.3%", null, null, "46.6%"]}
      />
      

      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > - 1
      </Atom>


      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 2
      </Atom>


      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 3
      </Atom>


      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        T
      </Atom>


      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 5
      </Atom>



      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 6
      </Atom>



      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 7
      </Atom>



      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 8
      </Atom>

      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 9
      </Atom>

      
      <Atom
        variant="10"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 10 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > + 10
      </Atom>


      <Atom
        variant="11"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 11 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > + 11
      </Atom>


      <Atom
        variant="12"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 12 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > + 12
      </Atom>


      <Atom
        variant="13"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 13 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > + 13
      </Atom>



      <Atom
        variant="14"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 14 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 14
      </Atom>



      <Atom
        variant="15"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 15 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 15
      </Atom>



      <Atom
        variant="16"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 16 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 16
      </Atom>



      <Atom
        variant="17"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 17 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > 17
      </Atom>



      <Atom
        variant="18"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 18 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      > + 18
      </Atom>


    </>
  );
};

export default SecondDFA;
