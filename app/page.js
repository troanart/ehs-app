import Calendar from "./ui/Calendar"

export default function Home() {
  // const events = [
  //   { title: 'Событие 1', start: '2024-01-01' },
  //   { title: 'Событие 2', start: '2024-01-05', end: '2024-01-07' },
   
  // ];
  return (
    <main className="bg-red-500 col-span-4 row-span-5 m-2 p-10 rounded-md ">
      <Calendar />
    </main>
    
  )
}