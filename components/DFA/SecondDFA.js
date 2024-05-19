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
      {/* q1 q2 */}
      <Text size="label" top="-60%" left="2%">
        1
      </Text>

      {/* q1 q3 */}
      <Text size="label" top="-10%" left="2%">
        0
      </Text>
      
      {/* q1 q2 */}
      <ArrowBody
        w={["9em", null, "9em", null, null, "9em"]}
        top={["-65%", null, "-65%", null, null, "-65%"]}
        left={["4%", null, "4%", null, null, "4%"]}
        rotate={["140", null, "140", null, null, "140"]}
      />

      {/* q1 q2 */}
      <ArrowHead
        top={["-67.5%", null, "-67.5%", null, null, "-67.5%"]}
        left={["7.2%", null, "7.2%", null, null, "7.2%"]}
        rotate={["315", "315", "315", "315", "315", "315"]}
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
