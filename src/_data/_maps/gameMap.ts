// map game
// * audio
// * scene
// * text
// * choices
// * (type = textInput, text, choiceInput, determined)

export const gameDialogue = [
  {
    text: "ณ ดาวที่ทรุดโทรมแห่งนี้\nเกิดวิกฤติประชากรเพิ่มขึ้นจนล้นโลก\nทรัพยากรบนดาวเหลือน้อยเต็มที...\n\nมนุษย์นั้นหมดหนทางเลือก\nและจำเป็นต้องส่งยานสำรวจ\nไปตามหาดาวที่เหมาะสมแก่การดำรงชีวิต",
    type: "opening",
    scene: "horizon",
  },
  {
    text: "คุณคือหนึ่งในกลุ่มคนที่จะต้องออกตามหา ‘บ้านใหม่’ สำหรับมนุษย์",
    type: "text",
    scene: "horizon",
  },
  {
    text: "คุณคือแสงสว่างและอนาคตหนึ่งเดียวของมวลมนุษยชาติ",
    type: "text",
    scene: "horizon",
  },
  {
    text: "ขณะนี้คุณกำลังก้าวขึ้นยาน TU085\nการเดินทางครั้งใหม่ใกล้เริ่มต้นขึ้นแล้ว...",
    type: "text",
    scene: "horizon",
  },
  {
    text: "คุณไม่รู้ว่าการเดินทางครั้งนี้ ปลายทางจะอยู่ที่ไหน\nระหว่างทางจะเป็นอย่างไร จะต้องแลกด้วยอะไรบ้าง\nความสูญเสีย ความรัก ความห่วงใย สิ่งใดจะคงอยู่",
    type: "text",
    scene: "horizon",
  },
  {
    text: "ขณะนี้ยานได้เคลื่อนตัวออกมา…",
    type: "text",
    scene: "horizon-up",
  },
  {
    text: "แสงสว่างของดาวบ้านเกิด\nค่อย ๆ ริบหรี่ลง ความหวังเริ่มจืดจาง\nเหลือเพียงความเยือกเย็นของอวกาศอันกว้างใหญ่",
    type: "text",
    scene: "horizon-up",
  },
  {
    text: "คุณพร้อมแล้วหรือยัง ?",
    type: "text",
    scene: "horizon-up",
  },
  {
    text: "คุณคาดหวังว่าดาวดวงใหม่จะเป็นอย่างไร ?",
    choices: [
      "คงเป็นดาวที่สดใสมีต้นไม้มากมาย เต็มไปด้วยสัตว์น้อยใหญ่วิ่งเล่นกันสนุกสนาน",
      "เป็นดาวที่ดูแปลกตา มีแร่ธาตุอุดมสมบูรณ์ และเต็มไปด้วยสิ่งมหัศจรรย์ที่รอการค้นพบ",
      "เป็นดาวที่มีอาณานิคมตั้งอยู่ก่อนแล้ว เต็มไปด้วยการต้อนรับและมิตรภาพ",
      "ไม่มั่นใจด้วยซ้ำว่าจะเจอดาวดวงใหม่ที่หวังหรือไม่",
    ],
    score: [{ strong: 3, cheerful: 2 }, { restoration: 3, passion: 2, strategist: 1 }, { friendship: 3 }, { brave: 3 }],
    type: "choice",
    scene: "question",
  },
  {
    text: "ในการเดินทางครั้งนี้ คุณมีเสบียงอยู่จำกัด…",
    type: "text",
    scene: "question",
  },
  {
    text: "ผ่านมาสักพัก คุณและเพื่อน ๆ เกิดหิวขึ้นมา\nแต่ในยานเหลือเพียงเสบียงสำหรับอนาคต คุณจะทำอย่างไร ?",
    choices: [
      "อดทนยังไม่กินอะไร",
      "กินอาหารสำรองจากในคลังไปก่อน เดี๋ยวค่อยไปหาใหม่ข้างหน้า",
      "ทำอาหารจากเศษอาหารที่เหลือ",
      "พยายามส่งสัญญาณขอความช่วยเหลือไปในอวกาศ",
    ],
    score: [
      { determination: 3, strong: 2, friendship: 1 },
      { cheerful: 3 },
      { passion: 3 },
      { strategist: 3, restoration: 1, passion: 1 },
    ],
    type: "choice",
    scene: "question",
  },
  {
    text: "ขณะนี้ยานของคุณเข้าสู่เขตดาวเคราะห์หินเล็ก ๆ ทันใดนั้น\nยานของคุณก็ชนเข้ากับก้อนหินขนาดมหึมา",
    type: "text",
    scene: "question",
  },
  {
    text: "...ทำให้ห้องโดยสารส่วนท้ายของยาน\nที่มีเพื่อนบางส่วนของคุณติดอยู่ในนั้นถูกทำลาย\nและอากาศภายในยานกำลังรั่วออก คุณต้องเลือกทำอะไรสักอย่าง",
    type: "text",
    scene: "question",
  },
  {
    text: "คุณจะตัดสินใจอย่างไร ?",
    choices: [
      "ปลดยานส่วนนั้นทิ้ง ทำให้ยานเคลื่อนตัวได้เร็วยิ่งขึ้น เพื่อที่จะรักษาชีวิตคนส่วนมาก",
      "เสี่ยงชีวิตเพื่อเข้าไปช่วยคนที่ยังติดอยู่ในห้องโดยสารนั้น ถึงแม้จะมีโอกาสทำให้ผู้โดยสารในยานทั้งลำเสียชีวิตไปด้วย",
      "พิจารณา วางแผนและหาหนทางทำให้คนรอดทั้งลำ แม้จะใช้เวลานานและอาจจะทำไม่ได้จริง",
      "เอาชีวิตตัวเองให้รอด เพราะยังมีหนทางอีกยาวไกลรอคุณอยู่",
    ],
    score: [{ strong: 3 }, { cheerful: 3, brave: 2 }, { strategist: 3, friendship: 2 }, { determination: 2 }],
    type: "choice",
    scene: "dawn",
  },
  {
    text: "สุดท้ายคุณก็ผ่านออกมาได้",
    type: "text",
    scene: "dawn",
  },
  {
    text: "ยินดีด้วยนะ",
    type: "text",
    scene: "dawn",
  },
  {
    text: "ไม่สิ... เสียใจด้วยนะ",
    type: "text",
    scene: "dawn",
  },
  {
    text: "เพื่อน ๆ ของคุณได้หายไปในห้วงอวกาศแล้ว",
    type: "text",
    scene: "dawn",
  },
  {
    text: "หลังจากเหตุการณ์ที่เกิดขึ้น ภายในยานก็เกิดความโกลาหลวุ่นวาย\nเสียงคร่ำครวญของผู้คนกึกก้องไปทั่วยาน บ้างก็ร้องไห้เสียใจ\nบ้างก็โทษว่าเป็นความผิดของคุณ \n\nตอนนี้ไม่มีใครเชื่อใจกันอีกแล้ว...",
    type: "text",
    scene: "dawn",
  },
  {
    text: "เสียงเตือนภัยนิรภัยของยานได้ดังขึ้น\nระบบควบคุมความดันอากาศภายในเครื่องได้ชำรุดเสียแล้ว\nในอีกไม่กี่นาทีข้างหน้า\nผู้คนจะเริ่มหมดสติจากการขาดออกซิเจนอย่างช้า ๆ",
    type: "text",
    scene: "dawn",
  },
  {
    text: "คุณต้องการให้ทุกคนกลับมาเชื่อมั่นในกันและกันอีกครั้ง\nคุณจึงเสนอตัวไปซ่อมยานด้วยตัวเอง",
    type: "text",
    scene: "dawn",
  },
  {
    text: "ระหว่างที่คุณซ่อมระบบควบคุมความดันอากาศอยู\nคุณเหลือบไปเห็นอีกส่วนของยานที่ดูเหมือนจะชำรุด คุณจะทำอย่างไร ?",
    choices: ["เข้าไปซ่อมส่วนนั้นทันที", "ปล่อยผ่านไป แล้วไปซ่อมส่วนที่คุณตั้งใจว่าจะมาซ่อม"],
    score: [
      { brave: 3, restoration: 2, cheerful: 1 },
      { passion: 3, determination: 2 },
    ],
    type: "choice",
    scene: "red",
  },
  {
    outcomes: [
      "หลังคุณพยายามซ่อมยานไปสักพัก\nหลาย ๆ อย่างก็ดูแย่ไปกว่าเดิม ดูเหมือนว่าคุณจะด่วนตัดสินใจมากเกินไป\nทั้ง ๆ ที่ไม่ได้ศึกษามันมาดีพอ",
      "หลังจากคุณซ่อมเสร็จและได้กลับเข้ามาในยานแล้ว ระบบเตือนภัยได้แจ้งว่าระบบนำทางของยานเกิดความเสียหาย",
    ],
    type: "determined",
    scene: "red",
  },
  {
    outcomes: ["คุณทำมันพังอีกครั้งหนึ่ง", "นั่นก็คือส่วนที่คุณได้ละเลยมันไป"],
    type: "determined",
    scene: "red",
  },
  {
    text: "ยานเริ่มเกิดความแปรปรวน ไม่สามารถควบคุมทิศทางได้",
    type: "text",
    scene: "red",
  },
  {
    text: "คุณถูกดูดเข้าไปในช่องว่างของอวกาศที่ดำมืดอย่างไม่มีที่สิ้นสุด",
    type: "text",
    scene: "red",
  },
  {
    text: "คุณจะทำอย่างไร ?",
    choices: [
      "รีบตรงไปที่ห้องควบคุมเพื่อรีบบังคับยานให้ออกไปจากจุดนี้ให้เร็วที่สุด",
      "ใช้ยานนิรภัยเพื่ออพยพคนออกไปโดยทิ้งสำภาระทั้งหมดให้ถูกดูดเข้าไปในหลุมดำ",
    ],
    score: [
      { restoration: 3, determination: 2, strong: 1, brave: 1 },
      { friendship: 3, strategist: 2 },
    ],
    type: "choice",
    scene: "hero",
  },
  {
    text: "คุณคือฮีโร่ของเพื่อน ๆ",
    type: "text",
    scene: "hero",
  },
  {
    text: "ดีใจด้วย ! สิ่งที่คุณตัดสินใจมันถูกต้องแล้ว",
    type: "text",
    scene: "hero",
  },
  {
    text: "ตอนนี้ทุกคนพ้นจากอันตรายแล้วนะ",
    type: "text",
    scene: "hero",
  },
  {
    text: "ดวงตาของคุณค่อย ๆ ปิดลง…",
    type: "text",
    scene: "black",
  },
  {
    text: "คุณลืมตาขึ้นมาอีกครั้ง และเมื่อมองไปรอบ ๆ",
    type: "text",
    scene: "finale",
  },
  {
    text: "บรรยากาศโดยรอบเปลี่ยนไปโดยฉับพลัน\nคุณรู้ได้ทันทีว่านี่จะเป็นบ้านหลังใหม่",
    type: "text",
    scene: "finale",
  },
  {
    text: "ตลอดการเดินทางที่ผ่านมาคุณรู้สึกอย่างไร ?",
    type: "textInput",
    scene: "finale",
  },
  {
    text: "ตลอดการเดินทางอันยาวไกล\nมีเรื่องราวเกิดขึ้นมากมาย ทั้งเรื่องดีและเรื่องร้าย",
    type: "text",
    scene: "finale",
  },
  {
    text: "แต่ไม่ว่าที่ผ่านมาจะเกิดอะไรขึ้น โปรดให้กำลังใจตัวเอง\nค่อย ๆ เรียนรู้จากความผิดพลาด\nและเติบโตเป็นคนที่ดีขึ้นในแบบของตนเองนะ :-)",
    type: "text",
    scene: "finale",
  },
  {
    text: "Welcome to Triam Udom Online Open House 2022 \n“The Interstellar Odyssey”",
    type: "finale",
    scene: "finale",
  },
]
