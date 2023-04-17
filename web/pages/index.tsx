import Head from 'next/head'
import Link from 'next/link'
import CFP from '../components/CFP'
import Header from '../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ethics and Applied Philosophy Conference</title>
        <meta name="description" content="The Ethics and Applied Philosophy Conference at UNC Charlotte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='container w-10/12 mx-auto my-20'>
        <div className='py-5 text-jet'>
          <div className='py-5 text-center'>
            <h1 className='text-3xl font-bold'>Ethics and Applied Philosophy Graduate Conference at UNC Charlotte</h1>
            <h1 className='text-2xl font-bold'>April 28 & 29, 2023</h1>
          </div>
          <div className='py-5 text-center'>
            <h1 className='text-2xl font-bold'>Zoom Access</h1>
            <p>Please note that we are using two separate access links, one for each day.</p>
            <div className='py-3'>
              <div className='py-2'>
                <p><b>Day 1</b></p>
                <a href="https://charlotte-edu.zoom.us/j/96594662034" className='underline'>https://charlotte-edu.zoom.us/j/96594662034</a>
              </div>
              <div className='py-2'>
                <p><b>Day 2</b></p>
                <a href="https://charlotte-edu.zoom.us/j/99320707141" className='underline'>https://charlotte-edu.zoom.us/j/99320707141</a>
              </div>
            </div>
          </div>
          <div className='py-5'>
            <h1 className='text-2xl font-bold text-center'>Day 1 (Friday, April 28)</h1>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Day 1 Welcome & Tech Check (2:30pm ET, April 28th)</h2>
              <p>Please join the UNC Charlotte Philosophical Union in starting the 2023 Ethics and Applied Philosophy Graduate Conference at UNC Charlotte. We will also have time to troubleshoot any tech issues.</p>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 1 (3:00pm ET) — <i>Conceptualizing Harm in Bioethics Contexts</i></h2>
              <div className='pl-10'>
                <p>Moderator: Jahnavi Patel (she/her)</p>
                <p>Speaker: Stefano Pinzan (He/Him), <q>The Role of Empathy in a Kantian Ethics of Care</q></p>
                <p>Speaker: O. René Garrett Wright (René/They/Them/Theirs): <q>Sexual Concern: On People Living with HIV/AIDS, LGBTQ+ Panic, and Non-disclosure</q> (Exemplary Undergraduate Philosopher 2023)</p>
                <p>Speaker: Erica Bigelow (she/they): <q>The Metaphorical is Medical is Metaphorical: Racist Discourses in the ‘War’ on COVID</q></p>
              </div>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 2 (4:30pm ET) — <i>Narrative, Mindfulness, and Empathy</i></h2>
              <div className='pl-10'>
                <p>Moderator: Erica Nelson (they/them)</p>
                <p>Speaker: Logan Mitchell (they/them): <q>Mindfulness and Moral Emotions</q></p>
                <p>Speaker: Brianna Larson (She/They): <q>Narrative and Well-Being: The Case for Self-Narrative as Fundamental in Michael Bishop’s Network Theory of Well-Being</q></p>
                <p>Speaker: Sean Maroney (He): <q>Empathy's Capriciousness</q></p>
              </div>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 3 (6:00pm ET) — <i>Popular Culture, Speech, and The Body</i></h2>
              <div className='pl-10'>
                <p>Moderator: Will Wright (he/him)</p>
                <p>Speaker: Urna Chakrabarty (she/her): <q>How Fat Horrifies: On Anti-Fat Bias as Fatphobia</q></p>
                <p>Speaker: Margaret Murphy (she/they): <q>They Don’t Know About Us:  Teenage Girls, Sexuality and Fan-Fiction</q></p>
                <p>Speaker: Linda Priano (She/Her): <q>Moral Exemplars as Counterspeakers</q></p>
              </div>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 4 (7:30pm ET) — <i>Two Approaches to the Climate Crisis</i></h2>
              <div className='pl-10'>
                <p>Moderator: Nicholas Osaka (they/them)</p>
                <p>Speaker: Valena M. C. Reich (She/her): <q>Protecting the Environment: A Justification for Civil Disobedience</q> (Exemplary Undergraduate Philosopher 2023)</p>
                <p>Speaker: Matthew Wiseman (he/him): <q>The Obligations of Democratic Proxy Representatives for Future People</q></p>
              </div>
            </div>
            <h1 className='text-2xl font-bold text-center'>Day 2 (Saturday, April 29)</h1>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Day 2 Coffee & Technology Check (8:30am ET)</h2>
              <p>Please join the UNC Charlotte Philosophical Union in our second day welcome. We will have time for coffee, conversation, and time to troubleshoot any tech issues.</p>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 1 (9:00am ET) — <i>Understandings of the Social Construction of Race</i></h2>
              <div className='pl-10'>
                <p>Moderator: Nicholas Osaka (they/them)</p>
                <p>Speaker: Larissa Kolias (She/her): <q>Haslanger and the Racialized Subject: Against the Social/Political Theory of Race</q></p>
                <p>Speaker: Ryan Miller (he/him): <q>Race as a Constructed Cause</q></p>
                <p>Speaker: Jenny Baranker (she/her): <q>The Problematic Consequences of Having Gendered and Racialized Consumer Goods When There Is No Functional Difference</q></p>
              </div>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 2 (10:30am ET) — <i>Medical Paternalism and Suicide, Harm</i></h2>
              <p><b>Note to attendees:</b> This session presents philosophical interventions concerning suicide, suicidal ideation, and medical paternalism relating to harm. We recognize the importance of this work, and simultaneously want to notify attendees who may want to elect to not participate in this session.</p>
              <div className='pl-10'>
                <p>Moderator: Erik Bahnson (he/him)</p>
                <p>Speaker: Eli Garrett Schantz (He/him/his): <q>The Volitional Account of Harm</q></p>
                <p>Speaker: Moya Mapps (they/them): <q>Suicide and Paternalism</q></p>
                <p>Speaker: Ricky Mouser (he/him): <q>Surviving and Thriving</q></p>
              </div>
            </div>
            <h2 className='text-1xl font-bold py-5'>Lunch — 12:00pm ET</h2>
            <h2 className='text-1xl font-bold'>Plenary Session (1:30pm ET) — Keynote by Johnathan Flowers (CSU Northridge)</h2>
            <div className='pl-10 pt-2'>
              <p>Title: <q>An Applied Ethics of Inquiry: Beyond ‘Just Asking Questions’</q></p>
              <p className='pt-2'>This talk will highlight the need for philosophers to be responsive to the social, political, and cultural contexts from which their inquiries emerge and to which they must ultimately return. Insofar as philosophers hold a view of philosophical inquiry generally, and ethical inquiry specifically, as <q>just asking questions</q> or proceeding from a standpoint beyond culture, this talk will reject this assertion and instead point to culturally and socially responsive inquiry as a necessity for ethical philosophical inquiry. This talk will conclude by drawing on two examples from the Society for Professional  Journalists Code of Ethics as a starting point for how to conduct ethical inquiry.</p>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 3 (3:00pm ET) — <i>Sex, Gender, and Medicine</i></h2>
              <div className='pl-10'>
                <p>Moderator: Steve Muir (he/him)</p>
                <p>Speaker: Rebecca Sanaeikia (She/Her): <q>Cissexist Medicalization of Transgender Bodies</q></p>
                <p>Speaker: Kimberly Beasley (she/her): <q>Intersex Injustice: A Bioethical Analysis of Intersex Infant Surgery</q></p>
                <p>Speaker: Scout Etterson (they/them): <q>Articulating the Trans Relationship between Sex and Gender</q></p>
              </div>
            </div>
            <div className="py-5">
              <h2 className='text-1xl font-bold'>Session 4 (4:30pm ET) — <i>Approaches to Social Ethics</i></h2>
              <div className='pl-10'>
                <p>Moderator: Trey Irby (he/him)</p>
                <p>Speaker: Jordan Desmond (he/him): <q>Social Contribution, Basic Needs, and the Scope of Egalitarian Duties</q></p>
                <p>Speaker: Bryson Ng (He/Him): <q>A Rancièrian Analysis of Objectionable Commemorations: Aesthetics, Ethics, and Decolonial Praxis</q></p>
                <p>Speaker: Peter Visscher (He/Him): <q>If You Can’t Beat ‘Em, Join ‘Em: Using Techno-Social Engineering as Foucauldian Ethical Practice</q></p>
              </div>
            </div>
            <h2 className='text-1xl font-bold'>Social Hour — 6:00pm ET</h2>
            <p>Please join us in ending the conference with a social hour: a time for us to network and discuss in a more casual setting.</p>
            <h1 className='text-2xl font-bold text-center py-5'>Speaker Information</h1>
            <p><b>Jenny Baranker</b> (she/her), University of Oklahoma</p>
            <p><b>Kimberly Beasley</b> (she/her), Kent State University</p>
            <p><b>Erica Bigelow</b> (she/they), University of Washington</p>
            <div className='pl-10'>
              <p>Twitter: <a href="https://twitter.com/EricaBigelow" className='underline'>@EricaBigelow</a></p>
              <p>Instagram: <a href="https://www.instagram.com/ericapbig/" className='underline'>@ericapbig</a></p>
            </div>
            <p><b>Urna Chakrabarty</b> (she/her), Cornell University</p>
            <p><b>Jordan Desmond</b> (he/him), Queen's University</p>
            <p><b>Scout Etterson</b> (they/them), Arizona State University</p>
            <div className='pl-10'>
              <p>@skqoot</p>
            </div>
            <p><b>Larissa Kolias</b> (She/her), The University of Calgary</p>
            <div className='pl-10'>
              <p>PhilPeople: <a href="https://philpeople.org/profiles/larissa-kolias" className='underline'>Larissa Kolias</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/larissakolias/" className='underline'>Larissa Kolias</a></p>
            </div>
            <p><b>Brianna Larson</b> (She/They), Independent Scholar</p>
            <div className='pl-10'>
              <p>Twitter: <a href="https://twitter.com/brilarsonn" className='underline'>@brilarsonn</a></p>
            </div>
            <p><b>Moya Mapps</b> (they/them), Yale University</p>
            <div className='pl-10'>
              <p>Website: <a href="https://moyamapps.com" className='underline'>moyamapps.com</a></p>
            </div>
            <p><b>Sean Maroney</b> (He), King's College London</p>
            <div className='pl-10'>
              <p>Instagram: <a href="https://www.instagram.com/komodobill/" className='underline'>@komodobill</a></p>
            </div>
            <p><b>Ryan Miller</b> (he/him), University of Geneva</p>
            <div className='pl-10'>
              <p>@rmm4pi8</p>
            </div>
            <p><b>Logan Mitchell</b> (they/them), UNC Chapel Hill</p>
            <p><b>Ricky Mouser</b> (he/him), Indiana University Bloomington</p>
            <p><b>Margaret Murphy</b> (she/they), American University</p>
            <div className='pl-10'>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/margaret-murphy-060b34191/" className='underline'>Margaret Murphy</a></p>
              <p>Twitter: <a href="https://twitter.com/margecmurph" className='underline'>@margecmurph</a></p>
              <p>Instagram: <a href="https://www.instagram.com/ma.gg13/" className='underline'>@ma.gg13</a></p>
            </div>
            <p><b>Bryson Ng</b> (He/Him), Nanyang Technological University</p>
            <div className='pl-10'>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/bryson-ng-319116188/" className='underline'>Bryson Ng</a></p>
            </div>
            <p><b>Stefano Pinzan</b> (He/Him), Vita-Salute San Raffaele University & University of California, Los Angeles</p>
            <p><b>Linda Priano</b> (She/Her), University of Milan</p>
            <p><b>Valena M. C. Reich</b> (She/her), King's College London</p>
            <div className='pl-10'>
              <p>LinkedIn: <a href='https://www.linkedin.com/in/valena-reich-2aaa2a1b1/' className='underline'>Valena M. C. Reich</a></p>
            </div>
            <p><b>Rebecca Sanaeikia</b> (She/Her), University of Rochester</p>
            <div className='pl-10'>
              <p>Twitter:  <a href="https://twitter.com/logavaguy" className='underline'>@logavaguy</a></p>
            </div>
            <p><b>Eli Garrett Schantz</b> (He/him/his), Indiana University School of Medicine-South Bend</p>
            <div className='pl-10'>
              <p>Mastodon: <a href="https://med-mastodon.com/@eligschantz" className='underline'>@eligschantz@med-mastodon.com</a></p>
            </div>
            <p><b>Peter Visscher</b> (He/Him), Villanova University</p>
            <p><b>Matthew Wiseman</b> (he/him), University of Southern California</p>
            <p><b>O. René Garrett Wright</b> (René/They/Them/Theirs), Denison University</p>
            <div className='pl-10'>
              <p>@maxiplush</p>
            </div>
            <h1 className='text-2xl font-bold text-center py-5'>Notes and Acknowledgements</h1>
            <p className='py-2'>The Philosophical Union of UNC Charlotte is the graduate student organization of students at UNC Charlotte interested in philosophical interventions and discussion. Annually since 2018, the Philosophical Union has organized the Ethics and Applied Philosophy Graduate Conference, a home for philosophical interventions and discourse from an applied and interdisciplinary perspective. This year, for the first time ever, we have decided to open submissions to undergraduate students and independent scholars (e.g. those between enrollments or considering graduate training). We believe this better promotes the project of philosophical inquiry and intervention for all and by all.</p>
            <p className='py-2'>We want to congratulate the two undergraduate students on the program for their exemplary research: Valena M. C. Reich, King’s College London and O. René Garrett Wright, Denison University.</p>
            <p className='py-2'>In acknowledgement of the labor required to organize this conference, we thank the following individuals (in no particular order) for their work in various capacities, be it organizing, reviewing abstracts, or moderating panels: Steve Muir, Nicholas Osaka, Erica Nelson, Will Wright, Erik Bahnson, Zach Elias, James Carr, Carson Saffold, and Pennda Arami. We also thank Amanda Pinto (Marquette University) and Ian Hosbach (Marquette University) for their service as external reviewers. We are also in appreciation of the Center for Professional & Applied Ethics at UNC Charlotte and the faculty of the Department of Philosophy for their advice in organizing this conference.</p>
            <p className='py-2'>This conference is funded in part by the Graduate & Professional Student Government (GPSG) of the University of North Carolina at Charlotte with student activity fees. The GPSG and Student Activity Fees Commision do not necessarily endorse the beliefs or actions of this organization.</p>
            <div className='flex justify-center py-10'>
              <Image src="/gpsgdisclosure.png" width={400} height={200} alt={'Funded in part by the Graduate & Professional Student Government with your student activity fees. GPSG & SAFC do not necessarily endorse the beliefs or actions of this organization.'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
