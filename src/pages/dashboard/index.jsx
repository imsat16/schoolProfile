import Button from '@/components/atoms/Button'
import React from 'react'
import { Card, Title, AreaChart, DonutChart } from "@tremor/react";
import DashboardLayouts from '@/layouts/dashboard';

const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];
  
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

const Dashboard = () => {
    

  return (
    <DashboardLayouts>
            <div className="flex-1 grid grid-cols-12 gap-4 p-4 pb-24 overflow-y-auto">
                <div className="col-span-12 lg:col-span-6 p-1 rounded-md grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div className="bg-white flex items-center justify-center shadow-md rounded-lg">
                        <div className="w-28 h-28 bg-blue-400 flex relative items-center justify-center rounded-full">
                            <div className="w-20 h-20 bg-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center relative">
                        <div className="bg-red-500 w-28 h-6 rotate-45 absolute"></div>
                        <div className="bg-red-500 w-28 h-6 -rotate-45 absolute"></div>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center relative">
                        <div className="bg-red-500 w-28 h-6 rotate-45 absolute"></div>
                        <div className="bg-red-500 w-28 h-6 -rotate-45 absolute"></div>
                    </div>
                    <div className="bg-white flex items-center justify-center shadow-md rounded-lg">
                        <div className="w-28 h-28 bg-blue-400 flex relative items-center justify-center rounded-full">
                            <div className="w-20 h-20 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-6 bg-white p-4 rounded-md"> */}
                    <Card className='col-span-12 lg:col-span-6'>
                        <Title>Pengunjung Website</Title>
                        <AreaChart
                            className="h-72 mt-4"
                            data={chartdata}
                            index="date"
                            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                            colors={["bg-red-300", "cyan"]}
                            valueFormatter={dataFormatter}
                        />
                    </Card>
                {/* </div> */}
                <div className="col-span-12 bg-white p-4 rounded-md">
                    <Card>
                        <Title>Apa Kek</Title>
                        <AreaChart
                            className="h-72 mt-4"
                            data={chartdata}
                            index="date"
                            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                            colors={["bg-red-300", "cyan"]}
                            valueFormatter={dataFormatter}
                        />
                    </Card>
                </div>
            </div>

            <div className="w-3/12 pb-24 hidden lg:flex flex-col gap-4 p-4 overflow-y-auto">
                <div className="bg-white w-full h-96 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi maiores ullam? Ex, natus sunt nemo blanditiis non rerum dicta tempore ipsa, deserunt quisquam cumque saepe. Odit, officiis velit! Unde sapiente reprehenderit voluptates non sit eos hic, voluptatum fugit ipsa dolorum officia temporibus aliquam in magnam distinctio sed maxime minus, modi nam nihil inventore? Dolore et nisi illum similique est nulla doloremque maiores eligendi facilis dolor magni temporibus ipsam a ipsa enim vel sapiente, soluta iure voluptates. Quisquam, temporibus. Temporibus, velit sint! Neque doloribus inventore, rerum voluptates molestiae libero illo.</div>
                <div className="bg-white w-full h-96 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem sint rerum, architecto maiores dolore.</div>
                <div className="bg-white w-full h-96 p-4 rounded-lg">asd</div>
                <div className="bg-white w-full h-96 p-4 rounded-lg">asd</div>
                <div className="bg-white w-full min-h-96 p-4 rounded-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores esse laboriosam eum, iste dolore enim, sed quibusdam inventore voluptate cumque ducimus nemo placeat voluptatum sunt tenetur eligendi consequatur. Sapiente impedit exercitationem consectetur et at placeat debitis qui. Unde soluta magnam deserunt esse, quibusdam tempora minus. Consectetur voluptates maxime eius nam architecto vel tenetur cupiditate doloremque optio quasi qui eum veniam, quidem neque. Ratione sapiente, quis placeat cumque corporis sed, voluptate accusantium debitis harum similique odio. Harum sapiente laboriosam ad eaque temporibus suscipit! Necessitatibus dolorem assumenda perferendis fugiat qui ratione quod optio, rem omnis odit fuga saepe consequuntur numquam error iure cupiditate quas quam officiis eaque itaque debitis facere quisquam! Nostrum temporibus at necessitatibus quas possimus ad eligendi delectus distinctio eius eveniet nulla perferendis cumque dolorem tempore error illum molestiae facilis, ex soluta officia incidunt ut expedita numquam! Aperiam doloribus quasi alias nihil ab saepe, consectetur odio totam quis autem, provident voluptatem minus quaerat possimus libero ullam doloremque reprehenderit in. Mollitia velit aliquam quas exercitationem, animi possimus, repellendus expedita, eveniet cupiditate unde rem fugit nisi commodi architecto. Ipsa animi inventore obcaecati. Velit, molestiae quia. Ratione, veniam odio tenetur, aliquid unde quas laborum omnis doloremque, voluptas libero enim ipsum ipsa harum reprehenderit.</div>
            </div>
    </DashboardLayouts>
    // <main className='h-screen max-h-screen fixed w-full'>
    //     <nav className='bg-white p-4'>
    //         <div className="container mx-auto">
    //             <div className="w-32 h-10 bg-blue-900 rounded-lg font-semibold text-white flex items-center justify-center">Logo</div>
    //         </div>
    //     </nav>
    //     <section className='flex h-full'>
    //         <aside className="w-2/12 flex flex-col gap-2 bg-white h-full p-4">
    //             <Button>
    //                 <div className="h-8 w-8 bg-white rounded-md flex flex-wrap items-center justify-center">
    //                     <div className="grid grid-cols-2 gap-[2px]">
    //                         <div className="h-2 w-2 bg-yellow-500 rounded-sm"/>
    //                         <div className="h-2 w-2 bg-yellow-300 rounded-sm"/>
    //                         <div className="h-2 w-2 bg-yellow-400 rounded-sm"/>
    //                         <div className="h-2 w-2 bg-yellow-500 rounded-sm"/>
    //                     </div>
    //                 </div>
    //                 Dashboard
    //             </Button>

    //             <Button className={'bg-transparent text-gray-500 hover:bg-blue-600/90 hover:text-yellow-400'}>
    //                 <div className="h-8 w-8 bg-gray-300 rounded-md flex flex-wrap items-center justify-center">
    //                     <div className="grid grid-cols-2 gap-[2px]">
    //                         <div className="h-5 w-5 bg-gray-400 rounded-sm col-span-2 flex items-end">
    //                             <div className="h-3 w-3 bg-gray-200 rounded-sm col-span-2"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 Tampilan Website
    //             </Button>

    //             <Button className={'bg-transparent text-gray-500 hover:bg-blue-600/90 hover:text-yellow-400'}>
    //                 <div className="h-8 w-8 bg-gray-300 rounded-md flex flex-wrap items-center justify-center">
    //                     <div className="grid grid-cols-2 gap-[2px]">
    //                         <div className="h-5 w-5 bg-gray-400 rounded-sm col-span-2 flex flex-col gap-[2px] justify-center items-center">
    //                             <div className="h-[2px] w-3 bg-gray-200 rounded-sm col-span-2"/>
    //                             <div className="h-[2px] w-3 bg-gray-200 rounded-sm col-span-2"/>
    //                             <div className="h-[2px] w-3 bg-gray-200 rounded-sm col-span-2"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 Artikel
    //             </Button>

    //             <Button className={'bg-transparent text-gray-500 hover:bg-blue-600/90 hover:text-yellow-400'}>
    //                 <div className="h-8 w-8 bg-gray-300 rounded-md flex flex-wrap items-center justify-center">
    //                     <div className="grid grid-cols-2 gap-[2px]">
    //                         <div className="h-6 w-6 bg-gray-400 rounded-full col-span-2 flex flex-col gap-[2px] justify-center items-center">
    //                             <div className="h-2 w-2 bg-gray-200 rounded-full col-span-2"/>
    //                             <div className="h-1 w-3 bg-gray-200 rounded-sm col-span-2"/>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 Kontak
    //             </Button>

    //             <Button className={'bg-transparent text-gray-500 hover:bg-blue-600/90 hover:text-yellow-400'}>
    //                 <div className="h-8 w-8 bg-gray-300 rounded-md flex flex-wrap items-center justify-center">
    //                     <div className="grid grid-cols-2 gap-[2px]">
    //                         <div className="h-6 w-6 bg-gray-400 rounded-full col-span-2 flex flex-col gap-[2px] justify-center items-center">
    //                             <div className="flex gap-[1px]">
    //                                 <div className="h-2 w-2 bg-gray-200 rounded-full col-span-2"/>
    //                                 <div className="h-2 w-2 bg-gray-200 rounded-full col-span-2"/>
    //                             </div>
    //                             <div className="flex gap-[1px]">
    //                                 <div className="h-1 w-2 bg-gray-200 rounded-sm col-span-2"/>
    //                                 <div className="h-1 w-2 bg-gray-200 rounded-sm col-span-2"/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 PPDB
    //             </Button>
    //             {/* <button className='bg-blue-800 flex items-center gap-4 font-medium p-3 w-full text-start text-yellow-500 rounded-lg'><div className="h-10 w-10 bg-yellow-400"></div>Dashboard</button> */}
    //         </aside>

    //         <div className="flex-1 grid grid-cols-12 gap-4 p-4 pb-24 overflow-y-auto">
    //             <div className="col-span-6 p-1 rounded-md grid gap-4 grid-cols-2">
    //                 <div className="bg-white p-4 shadow-md rounded-lg">a</div>
    //                 <div className="bg-white p-4 shadow-md rounded-lg">a</div>
    //                 <div className="bg-white p-4 shadow-md rounded-lg">a</div>
    //                 <div className="bg-white p-4 shadow-md rounded-lg">a</div>
    //             </div>
    //             {/* <div className="col-span-6 bg-white p-4 rounded-md"> */}
    //                 <Card className='col-span-6'>
    //                     <Title>Pengunjung Website</Title>
    //                     <AreaChart
    //                         className="h-72 mt-4"
    //                         data={chartdata}
    //                         index="date"
    //                         categories={["SemiAnalysis", "The Pragmatic Engineer"]}
    //                         colors={["bg-red-300", "cyan"]}
    //                         valueFormatter={dataFormatter}
    //                     />
    //                 </Card>
    //             {/* </div> */}
    //             <div className="col-span-12 bg-white p-4 rounded-md">
    //                 <Card>
    //                     <Title>Apa Kek</Title>
    //                     <AreaChart
    //                         className="h-72 mt-4"
    //                         data={chartdata}
    //                         index="date"
    //                         categories={["SemiAnalysis", "The Pragmatic Engineer"]}
    //                         colors={["bg-red-300", "cyan"]}
    //                         valueFormatter={dataFormatter}
    //                     />
    //                 </Card>
    //             </div>
    //         </div>

    //         <div className="w-3/12 pb-24 flex flex-col gap-4 p-4 overflow-y-auto">
    //             <div className="bg-white w-full h-96 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi maiores ullam? Ex, natus sunt nemo blanditiis non rerum dicta tempore ipsa, deserunt quisquam cumque saepe. Odit, officiis velit! Unde sapiente reprehenderit voluptates non sit eos hic, voluptatum fugit ipsa dolorum officia temporibus aliquam in magnam distinctio sed maxime minus, modi nam nihil inventore? Dolore et nisi illum similique est nulla doloremque maiores eligendi facilis dolor magni temporibus ipsam a ipsa enim vel sapiente, soluta iure voluptates. Quisquam, temporibus. Temporibus, velit sint! Neque doloribus inventore, rerum voluptates molestiae libero illo.</div>
    //             <div className="bg-white w-full h-96 p-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem sint rerum, architecto maiores dolore.</div>
    //             <div className="bg-white w-full h-96 p-4 rounded-lg">asd</div>
    //             <div className="bg-white w-full h-96 p-4 rounded-lg">asd</div>
    //             <div className="bg-white w-full min-h-96 p-4 rounded-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores esse laboriosam eum, iste dolore enim, sed quibusdam inventore voluptate cumque ducimus nemo placeat voluptatum sunt tenetur eligendi consequatur. Sapiente impedit exercitationem consectetur et at placeat debitis qui. Unde soluta magnam deserunt esse, quibusdam tempora minus. Consectetur voluptates maxime eius nam architecto vel tenetur cupiditate doloremque optio quasi qui eum veniam, quidem neque. Ratione sapiente, quis placeat cumque corporis sed, voluptate accusantium debitis harum similique odio. Harum sapiente laboriosam ad eaque temporibus suscipit! Necessitatibus dolorem assumenda perferendis fugiat qui ratione quod optio, rem omnis odit fuga saepe consequuntur numquam error iure cupiditate quas quam officiis eaque itaque debitis facere quisquam! Nostrum temporibus at necessitatibus quas possimus ad eligendi delectus distinctio eius eveniet nulla perferendis cumque dolorem tempore error illum molestiae facilis, ex soluta officia incidunt ut expedita numquam! Aperiam doloribus quasi alias nihil ab saepe, consectetur odio totam quis autem, provident voluptatem minus quaerat possimus libero ullam doloremque reprehenderit in. Mollitia velit aliquam quas exercitationem, animi possimus, repellendus expedita, eveniet cupiditate unde rem fugit nisi commodi architecto. Ipsa animi inventore obcaecati. Velit, molestiae quia. Ratione, veniam odio tenetur, aliquid unde quas laborum omnis doloremque, voluptas libero enim ipsum ipsa harum reprehenderit.</div>
    //         </div>
    //     </section>
    // </main>
  )
}

export default Dashboard