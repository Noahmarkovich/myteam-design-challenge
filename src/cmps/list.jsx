export function List(){

    const teamMembers = [{p:' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”', name: 'Kady Baker', img: 'avatar-kady'}, {p:'“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”', name:'Aiysha Reese', img: 'avatar-aiysha'}, {p:'“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”', name:'Arthur Clarke', img: 'avatar-arthur'}]

    return <section className="list full">
        {/* <div className="main-layout"> */}
           <svg className="left" xmlns="http://www.w3.org/2000/svg" width="147" height="100"><g fill="none" fill-rule="evenodd"><path fill="#002529" d="M0 100h100V0H0z"/><path fill="#79C8C7" d="M47 96v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47zm0-8v4h100v-4H47z"/></g></svg>
        <div className="list-main">
           <main className="main-list">
           <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>

           <section className="team-list">
            {teamMembers.map(member=> {
                return <div className="team-member">
                    <svg xmlns="http://www.w3.org/2000/svg" width="67" height="56"><path fill="#2C6269" d="M51.273 56c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C63.976 7.782 65.286 4.069 67 0H55.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C36.857 31.23 36 35.4 36 39.063c0 5.391 1.361 9.562 4.083 12.512C42.805 54.525 46.535 56 51.273 56zm-36 0c4.638 0 8.368-1.322 11.19-3.967 2.823-2.645 4.235-5.799 4.235-9.46 0-2.95-.429-5.494-1.286-7.63a197.251 197.251 0 01-2.495-6.562c-.806-2.237-1.21-4.933-1.21-8.087 0-2.746.454-5.798 1.361-9.155C27.976 7.782 29.286 4.069 31 0H19.356c-3.73 3.662-7.032 7.833-9.905 12.512-2.873 4.68-5.166 9.359-6.88 14.038C.857 31.23 0 35.4 0 39.063c0 5.391 1.361 9.562 4.083 12.512C6.805 54.525 10.535 56 15.273 56z"/></svg>
                    <p>{member.p}</p>
                    <h3>{member.name}</h3>
                    <img className="avatar" src={require(`../assets/img/${member.img}.jpg`)}/>
                </div>
            })}
           </section>

           </main>
        </div>
           <svg className="right bottom" xmlns="http://www.w3.org/2000/svg" width="200" height="100"><g fill="none" fill-rule="evenodd"><path fill="#2C6269" d="M100 100h100V0H100z"/><path fill="#012F34" d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 67c18.225 0 33 14.775 33 33s-14.775 33-33 33-33-14.775-33-33 14.775-33 33-33z"/><path fill="#79C8C7" d="M100 96v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100zm0-8v4h100v-4H100z"/></g></svg>
     
    </section>
}