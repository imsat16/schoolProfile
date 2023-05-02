import Layouts from "@/layouts";

const a = [
  "asdasdasdasd adk lkad alk lorem ipsum dolor amet"
]

export default function Home() {
  return (
    <Layouts 
      title={'anjays'}
      description={a}
    >
      {a}
    </Layouts>
  )
}
