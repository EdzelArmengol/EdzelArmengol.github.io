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

      {/* q2 trapped */}
      <Text size="label" top="-58%" left="9%">
        0
      </Text>

      {/* q3 trapped */}
      <Text size="label" top="-20%" left="9%">
        1
      </Text>


      {/* q2 q5 */}
      <Text size="label" top="-60%" left="17%">
        1
      </Text>

      {/* q3 q5  */}
      <Text size="label" top="-15%" left="16.7%">
        0
      </Text>      

      {/* Trapped state  */}
      <Text size="label" top="-40%" left="3%">
        0,1
      </Text>


      {/* q5 q6 */}
      <Text size="label" top="-20%" left="24%">
        1
      </Text>

      {/* q6 q7  */}
      <Text size="label" top="18%" left="24%">
        1
      </Text>      

      {/* q7 q8  */}
      <Text size="label" top="60%" left="24%">
        1
      </Text>

      {/* q8 q9  */}
      <Text size="label" top="76%" left="28%">
        1
      </Text>

      {/* q5 q14  */}
      <Text size="label" top="-55%" left="40%">
        0
      </Text>

      {/* q6 q14  */}
      <Text size="label" top="-30%" left="40%">
        0
      </Text>

      {/* q7 q14  */}
      <Text size="label" top="-7%" left="40%">
        0
      </Text>

      {/* q8 q16  */}
      <Text size="label" top="65%" left="55%">
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
 
 {/* Arrow from q9 to q10 */}
 <ArrowBody
        w={["7em", null, "7em", null, null, "7em"]}
        top={["70%", null, "70%", null, null, "70%"]}
        left={["37%", null, "37%", null, null, "37%"]}
        rotate={["305", "305", "305", "305","305", "305"]}
      />
      <ArrowHead
        top={["55.2%", null, "55.2%", null, null, "55.2%"]}
        left={["38.2%", null, "38.2%", null, null, "38.2%"]}
        rotate={["300", "300", "300","300", "300", "300"]}
      />
  <Text size="label" top="60%" left="36%">
        0
      </Text>

  {/* q10 q11 */}
 <Text size="label" top="26%" left="43%">
        1
      </Text>
   <ArrowBody
        w={["5em", null, "5em", null, null, "5em"]}
        top={["30%", null, "30%", null, null, "32.5%"]}
        left={["45.5%", null, "45.5%", null, null, "45.5%"]}
        rotate={["305", "305", "305", "305","305", "309"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "18.9%"]}
        left={["38.4%", null, "38.4%", null, null, "46.8%"]}
        rotate={["300", "300", "300","300", "300", "301.5"]}
      />

      {/* q1 q3 */}
      <ArrowBody
        w={["9em", null, "9em", null, null, "9em"]}
        top={["-11", null, "-11%", null, null, "-11%"]}
        left={["3%", null, "3%", null, null, "3%"]}
        rotate={["45", null, "45", null, null, "45"]}
      />

      {/* q1 q3 */}
      <ArrowHead
        top={["-5%", null, "-5%", null, null, "-5%"]}
        left={["6.9%", null, "6.9%", null, null, "6.9%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />


      {/* q2 q5 */}
      <ArrowBody
        w={["9em", null, "9em", null, null, "9em"]}
        top={["-52.5%", null, "-52.5%", null, null, "-52.5%"]}
        left={["15%", null, "15%", null, null, "15%"]}
        rotate={["45", null, "45", null, null, "45"]}
      />

      {/* q2 q5 */}
      <ArrowHead
        top={["-46%", null, "-46%", null, null, "-46%"]}
        left={["19.1%", null, "19.1%", null, null, "19.1%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />


      {/* q2 q5 */}
      <ArrowBody
        w={["9em", null, "9em", null, null, "9em"]}
        top={["-52.5%", null, "-52.5%", null, null, "-52.5%"]}
        left={["15%", null, "15%", null, null, "15%"]}
        rotate={["45", null, "45", null, null, "45"]}
      />

      {/* q2 q5 */}
      <ArrowHead
        top={["-46%", null, "-46%", null, null, "-46%"]}
        left={["19.1%", null, "19.1%", null, null, "19.1%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />


      {/* q5 q6 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "6em"]}
        top={["-20%", null, "-20%", null, null, "-20%"]}
        left={["20.5%", null, "20.5%", null, null, "20.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q5 q6 */}
      <ArrowHead
        top={["-12%", null, "-12%", null, null, "-12%"]}
        left={["22%", null, "22%", null, null, "22%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />

      {/* q5 q14 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "32em"]}
        top={["-20%", null, "-20%", null, null, "-51%"]}
        left={["20.5%", null, "20.5%", null, null, "47.5%"]}
        rotate={["90", null, "90", null, null, "348"]}
      />

      {/* q5 q14 */}
      <ArrowHead
        top={["-12%", null, "-12%", null, null, "-73.3%"]}
        left={["22%", null, "22%", null, null, "71.5%"]}
        rotate={["90", "90", "90", "90", "90", "348"]}
      />
      
      {/* q6 q14 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "34em"]}
        top={["-20%", null, "-20%", null, null, "-30%"]}
        left={["20.5%", null, "20.5%", null, null, "47.5%"]}
        rotate={["90", null, "90", null, null, "337.5"]}
      />

      {/* q6 q14 */}
      <ArrowHead
        top={["-12%", null, "-12%", null, null, "-69.5%"]}
        left={["22%", null, "22%", null, null, "72%"]}
        rotate={["90", "90", "90", "90", "90", "337.5"]}
      />            

      {/* q6 q7 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "6em"]}
        top={["20%", null, "20%", null, null, "20%"]}
        left={["20.5%", null, "20.5%", null, null, "20.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q6 q7 */}
      <ArrowHead
        top={["28%", null, "28%", null, null, "28%"]}
        left={["22%", null, "22%", null, null, "22%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />

      {/* q7 q8 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "6em"]}
        top={["60%", null, "60%", null, null, "60%"]}
        left={["20.5%", null, "20.5%", null, null, "20.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q7 q8 */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "68%"]}
        left={["22%", null, "22%", null, null, "22%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />

      {/* q7 q14 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "38em"]}
        top={["60%", null, "60%", null, null, "-16%"]}
        left={["20.5%", null, "20.5%", null, null, "50.5%"]}
        rotate={["90", null, "90", null, null, "329"]}
      />

      {/* q7 q14 */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "-66%"]}
        left={["22%", null, "22%", null, null, "72.4%"]}
        rotate={["90", "90", "90", "90", "90", "329"]}
      />


      {/* q8 q9 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "6em"]}
        top={["60%", null, "60%", null, null, "86%"]}
        left={["20.5%", null, "20.5%", null, null, "27.5%"]}
        rotate={["90", null, "90", null, null, "0"]}
      />

      {/* q8 q9 */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "80.7%"]}
        left={["22%", null, "22%", null, null, "30.5%"]}
        rotate={["90", "90", "90", "90", "90", "0"]}
      />        

      
      {/* q8 q9 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "6em"]}
        top={["60%", null, "60%", null, null, "86%"]}
        left={["20.5%", null, "20.5%", null, null, "27.5%"]}
        rotate={["90", null, "90", null, null, "0"]}
      />

      {/* q8 q9 */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "80.7%"]}
        left={["22%", null, "22%", null, null, "30.5%"]}
        rotate={["90", "90", "90", "90", "90", "0"]}
      />


      {/* q3 q5 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "8em"]}
        top={["60%", null, "60%", null, null, "-18%"]}
        left={["20.5%", null, "20.5%", null, null, "18.5%"]}
        rotate={["90", null, "90", null, null, "315"]}
      />

      {/* q3 q5 */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "-30%"]}
        left={["22%", null, "22%", null, null, "19.9%"]}
        rotate={["90", "90", "90", "90", "90", "315"]}
      />


      {/* q3 trap state */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "8em"]}
        top={["60%", null, "60%", null, null, "-18%"]}
        left={["20.5%", null, "20.5%", null, null, "8.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q3 trap state */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "-27.9%"]}
        left={["22%", null, "22%", null, null, "10.101%"]}
        rotate={["90", "90", "90", "90", "90", "270"]}
      />

      {/* q3 trap state */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "8em"]}
        top={["60%", null, "60%", null, null, "-18%"]}
        left={["20.5%", null, "20.5%", null, null, "8.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q3 trap state */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "-27.9%"]}
        left={["22%", null, "22%", null, null, "10.101%"]}
        rotate={["90", "90", "90", "90", "90", "270"]}
      />

      {/* trapped state */}
      <ArrowLoopSm
        top={["50%", "50%", "50%", null, null, "70%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "46%"]}
        rotate="360"
      />
      <ArrowLoopLg
        top={["50%", "50%", "50%", null, null, "-40%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "5.8%"]}
        rotate="20"
      />


      {/* q3 trap state upper */}
            <ArrowBody
        w={["6em", null, "6em", null, null, "8em"]}
        top={["60%", null, "60%", null, null, "-48%"]}
        left={["20.5%", null, "20.5%", null, null, "8.5%"]}
        rotate={["90", null, "90", null, null, "90"]}
      />

      {/* q3 trap state upper */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "-51.5%"]}
        left={["22%", null, "22%", null, null, "10.101%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />



      {/* q8 q16 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "10em"]}
        top={["60%", null, "60%", null, null, "95%"]}
        left={["20.5%", null, "20.5%", null, null, "28.5%"]}
        rotate={["90", null, "90", null, null, "15"]}
      />

      {/* q8 q16 part 2 */}
      <ArrowBody
        w={["6em", null, "6em", null, null, "27em"]}
        top={["60%", null, "60%", null, null, "71.4%"]}
        left={["20.5%", null, "20.5%", null, null, "58%"]}
        rotate={["90", null, "90", null, null, "336"]}
      />      

      {/* q3 trap state upper */}
      <ArrowHead
        top={["62%", null, "60%", null, null, "40.8%"]}
        left={["22%", null, "22%", null, null, "74.701%"]}
        rotate={["90", "90", "90", "90", "90", "336"]}
      />
 
   {/* q11 q12 */}
      <ArrowBody
        w={["5em", null, "5em", null, null, "6em"]}
        top={["%", null, "30%", null, null, "-5%"]}
        left={["4%", null, "45.5%", null, null, "55%"]}
        rotate={["305", "305", "305", "305","305", "309"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-19.2%"]}
        left={["38.4%", null, "38.4%", null, null, "56.5%"]}
        rotate={["300", "300", "300","300", "300", "303"]}
      />
<Text size="label" top="-11%" left="52%">
        1
      </Text>

{/* q12 q13 */}
<ArrowBody
        w={["em", null, "5em", null, null, "5em"]}
        top={["%", null, "30%", null, null, "-20%"]}
        left={["4%", null, "45.5%", null, null, "66%"]}
        rotate={["305", "305", "305", "305","305", "0"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-25.3%"]}
        left={["38.4%", null, "38.4%", null, null, "68.5%"]}
        rotate={["300", "300", "300","300", "300", "0"]}
      />
<Text size="label" top="-30%" left="65%">
        0
      </Text>

{/* q13 q14 */}
<ArrowBody
        w={["em", null, "5em", null, null, "8em"]}
        top={["%", null, "30%", null, null, "-45%"]}
        left={["4%", null, "45.5%", null, null, "74.5%"]}
        rotate={["305", "305", "305", "305","305", "285"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-63.2%"]}
        left={["38.4%", null, "38.4%", null, null, "74.4%"]}
        rotate={["300", "300", "300","300", "300", "288"]}
      />
      <Text size="label" top="-42%" left="74.4%">
        0
      </Text>
{/* q13 q15 */}
<ArrowBody
        w={["em", null, "5em", null, null, "5em"]}
        top={["%", null, "30%", null, null, "-20%"]}
        left={["4%", null, "45.5%", null, null, "79.4%"]}
        rotate={["305", "305", "305", "305","305", "0"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-25.3%"]}
        left={["38.4%", null, "38.4%", null, null, "81.5%"]}
        rotate={["300", "300", "300","300", "300", "0"]}
      />
 <Text size="label" top="-30%" left="78%">
        1
      </Text>

{/* q14 q15 */}
<ArrowBody
        w={["em", null, "5em", null, null, "7.3em"]}
        top={["%", null, "30%", null, null, "-52%"]}
        left={["4%", null, "45.5%", null, null, "81%"]}
        rotate={["305", "305", "305", "305","305", "240"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-34.5%"]}
        left={["38.4%", null, "38.4%", null, null, "82.3%"]}
        rotate={["300", "300", "300","300", "300", "50"]}
      />
<Text size="label" top="-42%" left="79.4%">
        1
      </Text>

{/* q15 q17 */}
<ArrowBody
        w={["em", null, "5em", null, null, "7.3em"]}
        top={["%", null, "30%", null, null, "-18%"]}
        left={["4%", null, "45.5%", null, null, "92%"]}
        rotate={["305", "305", "305", "305","305", "215"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-2.9%"]}
        left={["38.4%", null, "38.4%", null, null, "95.6%"]}
        rotate={["300", "300", "300","300", "300", "38"]}
      />

<Text size="label" top="-16%" left="93%">
        1
      </Text>

{/* q17 q18 */}
<ArrowBody
        w={["em", null, "5em", null, null, "7.8em"]}
        top={["%", null, "30%", null, null, "18%"]}
        left={["4%", null, "45.5%", null, null, "107%"]}
        rotate={["305", "305", "305", "305","305", "220"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "31%"]}
        left={["38.4%", null, "38.4%", null, null, "109.2%"]}
        rotate={["300", "300", "300","300", "300", "40"]}
      />

<Text size="label" top="16%" left="106%">
        1
      </Text>

{/* q13 q17 */}
<ArrowBody
        w={["em", null, "5em", null, null, "15em"]}
        top={["%", null, "30%", null, null, "-2%"]}
        left={["4%", null, "45.5%", null, null, "84%"]}
        rotate={["305", "305", "305", "305","305", "16"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "-17.3%"]}
        left={["38.4%", null, "38.4%", null, null, "73.7%"]}
        rotate={["300", "300", "300","300", "300", "209"]}
      />

<Text size="label" top="-2%" left="85%">
        0
      </Text>

{/* q15 q16 */}
<ArrowBody
        w={["em", null, "5em", null, null, "11em"]}
        top={["%", null, "30%", null, null, "0%"]}
        left={["4%", null, "45.5%", null, null, "81%"]}
        rotate={["305", "305", "305", "305","305", "110"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "27.4%"]}
        left={["38.4%", null, "38.4%", null, null, "79.7%"]}
        rotate={["300", "300", "300","300", "300", "120"]}
      />
<Text size="label" top="15%" left="79.4%">
        0
      </Text>

{/* q16 q11 */}
<ArrowBody
        w={["em", null, "5em", null, null, "19em"]}
        top={["%", null, "30%", null, null, "25.5%"]}
        left={["4%", null, "45.5%", null, null, "65%"]}
        rotate={["305", "305", "305", "305","305", "14"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "9.9%"]}
        left={["38.4%", null, "38.4%", null, null, "52.5%"]}
        rotate={["300", "300", "300","300", "300", "195"]}
      />
<Text size="label" top="16%" left="67%">
        1
      </Text>

{/* q11 q16*/}
<ArrowBody
        w={["em", null, "5em", null, null, "19em"]}
        top={["%", null, "30%", null, null, "35%"]}
        left={["4%", null, "45.5%", null, null, "65%"]}
        rotate={["305", "305", "305", "305","305", "15"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "107.8"]}
        left={["38.4%", null, "38.4%", null, null, "74.5%"]}
        rotate={["300", "300", "300","300", "300", "12"]}
      />
<Text size="label" top="37%" left="67%">
        0
      </Text>

{/* q11 q16*/}
<ArrowBody
        w={["em", null, "5em", null, null, "19em"]}
        top={["%", null, "30%", null, null, "35%"]}
        left={["4%", null, "45.5%", null, null, "65%"]}
        rotate={["305", "305", "305", "305","305", "15"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "107.8"]}
        left={["38.4%", null, "38.4%", null, null, "74.5%"]}
        rotate={["300", "300", "300","300", "300", "12"]}
      />
<Text size="label" top="37%" left="67%">
        0
      </Text>

  {/* q16 q10*/}
<ArrowBody
        w={["em", null, "5em", null, null, "21em"]}
        top={["%", null, "30%", null, null, "40%"]}
        left={["4%", null, "45.5%", null, null, "59%"]}
        rotate={["305", "305", "305", "305","305", "180"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "130"]}
        left={["38.4%", null, "38.4%", null, null, "417"]}
        rotate={["300", "300", "300","300", "300", "180"]}
      />
<Text size="label" top="40%" left="55%">
        0
      </Text>
    
      {/* q18 q10*/}
<ArrowBody
        w={["em", null, "5em", null, null, "18em"]}
        top={["%", null, "30%", null, null, "45%"]}
        left={["4%", null, "45.5%", null, null, "95%"]}
        rotate={["305", "305", "305", "305","305", "175"]}
      />
  <ArrowBody
        w={["em", null, "5em", null, null, "25em"]}
        top={["%", null, "30%", null, null, "49.3%"]}
        left={["4%", null, "45.5%", null, null, "60%"]}
        rotate={["305", "305", "305", "305","305", "180"]}
      />
      <ArrowHead
        top={["30%", null, "30%", null, null, "156"]}
        left={["38.4%", null, "38.4%", null, null, "42%"]}
        rotate={["300", "300", "300","300", "300", "180"]}
      />
<Text size="label" top="40%" left="55%">
        0
      </Text>
 {/* q18 q19*/}
 <ArrowBody
        w={["em", null, "5em", null, null, "30em"]}
        top={["%", null, "30%", null, null, "75%"]}
        left={["4%", null, "45.5%", null, null, "59%"]}
        rotate={["305", "305", "305", "305","305", "180"]}
      />
   {/* q18 q19*/}
 <ArrowBody
        w={["em", null, "5em", null, null, "30em"]}
        top={["%", null, "30%", null, null, "75%"]}
        left={["4%", null, "45.5%", null, null, "87%"]}
        rotate={["305", "305", "305", "305","305", "180"]}
      />
     
<ArrowBody
        top={["30%", null, "30%", null, null, "130"]}
        left={["38.4%", null, "38.4%", null, null, "417"]}
        rotate={["300", "300", "300","300", "300", "22"]}
      />
 <ArrowBody
        w={["em", null, "5em", null, null, "9em"]}
        top={["%", null, "30%", null, null, "55%"]}
        left={["4%", null, "45.5%", null, null, "110.3%"]}
        rotate={["305", "305", "305", "305","305", "90"]}
      />
  <ArrowHead
        top={["30%", null, "30%", null, null, "50%"]}
        left={["38.4%", null, "38.4%", null, null, "111.9%"]}
        rotate={["300", "300", "300","300", "300", "270"]}
      />
<Text size="label" top="70%" left="111%">
        1
      </Text>
    
      <Text size="label" top="60%" left="80%">
        1
      </Text>
    

 {/* q18 q12*/}
 <ArrowBody
        w={["em", null, "5em", null, null, "22.3em"]}
        top={["%", null, "30%", null, null, "-33%"]}
        left={["4%", null, "45.5%", null, null, "113.3%"]}
        rotate={["305", "305", "305", "305","305", "270"]}
      />
 <ArrowBody
        w={["em", null, "5em", null, null, "32em"]}
        top={["%", null, "30%", null, null, "-100%"]}
        left={["4%", null, "45.5%", null, null, "85.1%"]}
        rotate={["305", "305", "305", "305","305", "180"]}
      />

<ArrowBody
        w={["em", null, "5em", null, null, "11.4em"]}
        top={["%", null, "30%", null, null, "-63%"]}
        left={["4%", null, "45.5%", null, null, "56.9%"]}
        rotate={["305", "305", "305", "305","305", "90"]}
      />
<ArrowHead
        top={["%", null, "30%", null, null, "-39%"]}
        left={["4%", null, "45.5%", null, null, "58.4%"]}
        rotate={["300", "300", "300","300", "300", "90"]}
      />

 <ArrowHead
        top={["30%", null, "30%", null, null, "25.8%"]}
        left={["4%", null, "45.5%", null, null, "111.8%"]}
        rotate={["300", "300", "300","300", "300", "90"]}
      />

<Text size="label" top="-90.8%" left="90.8%">
        1
      </Text>

      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "31.5%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "116.1%"]}
        rotate="190"
      />
      <Text size="label" top="31.5%" left="118.1%">
        1
      </Text>

      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "-90%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "75.1%"]}
        rotate="138"
      />
 <Text size="label" top="-90%" left="73.1%">
        0
      </Text>


      <ArrowLoopLg
        top={["20%", "20%", "20%", null, null, "32.8%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "37.1%"]}
        rotate="100"
      />
<Text size="label" top="32.8%" left="35.1%">
        0
      </Text>



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