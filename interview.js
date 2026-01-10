const interviews = {
  rhea: `
INTERVIEW 01: RHEA KAPOOR
+91 9385473627
HO_LAP_1502
Card F-2847

Relationship: Ex-girlfriend
Tone: Defensive, sharp-edged, wounded pride barely stitched together
Context: Conducted at 09:12 AM, faculty lounge. She asked for coffee. Didn’t touch it.
Transcript (Expanded):
Detective: You and Dr. Goyal ended things badly.
Rhea: Define “badly.”

People always think breakups come with screaming and slammed doors. Ours came with spreadsheets. He had… concerns. About my citations. About my collaborators. About whether I was “too comfortable” with shortcuts.
Detective: Were you?
Rhea: Everyone is, eventually. Academia pretends it’s holy. It’s not. It’s competitive.

He couldn’t accept that.
(She pauses. Jaw tightens.)
He used to say, “If the system rewards dishonesty, the system is broken.”

I used to say, “If you don’t play the game, the system will break you.”
Detective: Your name appears repeatedly in his contingency files.
Rhea: Of course it does. I was the easiest example. The safest villain.

You want the truth? He trusted me more than anyone. That’s why I’m there. That’s why it hurts.
Detective: You accessed his private repository three weeks before his death.
Rhea: With permission. He wanted a second set of eyes.

He said, “Tell me if I’m seeing patterns that aren’t there.”
(She laughs once, bitter.)
Turns out, he was seeing patterns everywhere.
Detective: Did you threaten him?
Rhea: I warned him.

There’s a difference. Threats come from fear. Warnings come from experience.
Detective: And the night he died?
Rhea: I was asleep. Alone. For once, that part is boring.
(She leans forward.)
If you’re looking for motive, you’ll find plenty.

If you’re looking for method… you’re wasting your time on me.
`,

  mehta: `
INTERVIEW 02: PROF. MEHTA
+91 93887743657
HO_LAP_1730
Card F-2846

Relationship: Project mentor
Tone: Controlled, irritated, precise to the point of arrogance
Context: Conducted at 11:40 AM, office. Door open. Glass walls.
Transcript (Expanded):
Detective: Dr. Goyal intended to expose irregularities tied to your funded project.
Mehta: Intended. Yes.

Academics intend many things. Publication. Reform. Moral clarity.

Few follow through when consequences arrive.
Detective: Funding would’ve collapsed.
Mehta: Funding always collapses eventually. You pivot. You rebrand. You survive.
Detective: You had administrative access to the repository.
Mehta: So do most senior faculty. That’s not a secret. That’s bureaucracy.
Detective: Several commits referencing “cleanup” occurred minutes after his death.
Mehta: And you assume guilt because of timing?
(Mehta smiles thinly.)
Correlation is not causation. He taught that, didn’t he?
Detective: Did you speak to him that night?
Mehta: No.
Detective: Phone records show a missed call at 12:41 AM.
(Mehta doesn’t look at the detective. He looks at the wall clock.)
Mehta: Missed.
Detective: Did you return it?
Mehta: No.
Detective: Why not?
Mehta: Because I don’t answer emotional calls after midnight.

That’s how mistakes happen.
(Pause.)
People think control means cruelty. It doesn’t.

It means knowing when not to touch something—especially when it’s unstable.
`,

  ananya: `
INTERVIEW 03: ANANYA SINGH
+91 8373765894
HO_LAP_3417
Card F-2853

Relationship: Cybersecurity Club President
Tone: Calm, surgical, unsettlingly self-aware
Context: Conducted at 02:20 PM, digital forensics lab. She requested screen access “for clarity.”
Transcript (Expanded):
Detective: You were one of the few students Dr. Goyal trusted with system-level discussions.
Ananya: He trusted competence. Titles bored him.
Detective: His notes suggest someone falsified achievements to gain access.
Ananya: Notes suggest many things. Notes aren’t proof.
(She scrolls through a log without being asked.)
See this? Everyone stares at timestamps. Nobody checks entropy.

That’s how amateurs frame professionals.
Detective: You could’ve staged this entire trail.
Ananya: Correct.
(She doesn’t smile. She lets that land.)
Which is why I wouldn’t.

Perfect crimes are suspicious. This one isn’t perfect. It’s biased.

It wants you to look at people. At emotions. At drama.
Detective: You’re saying the data is… manipulative?
Ananya: I’m saying someone understood investigators.

Understood what you expect to see.
(She finally smiles.)
If you think this is about hacking, you’ve already lost.

This is about assumptions.
Detective: Such as?
Ananya: That infrastructure is neutral.

That if something isn’t logged, it didn’t happen.
(She closes the laptop.)
Logs don’t lie.

But they also don’t scream when something is missing.
`,

  kunal: `
INTERVIEW 04: KUNAL VERMA
+91 9944836684
HO_LAP_0382
Card F-2865

Relationship: Research assistant, roommate
Tone: Emotional, fractured
Context: Conducted at 05:05 PM, dorm common room. He keeps checking his phone.
Transcript (Expanded):
Detective: You were the last person to speak to Dr. Goyal.
Kunal: We argued. I won’t deny that.

He was pushing too hard. Access logs, audits, permissions—I couldn’t keep up.
Detective: You asked for temporary credentials.
Kunal: Everyone does.

Temporary becomes permanent. That’s how research survives.
Detective: He disagreed.
Kunal: He said I was getting careless.

I said he was getting paranoid.
(His voice drops.)
I didn’t think he was scared. I thought he was… tired.
Detective: Why stay after midnight?
Kunal: Because I didn’t want to leave things unresolved.

Because he was still my mentor.
Detective: The smartwatch data shows a panic spike minutes after you left.
Kunal: I didn’t touch him.
(Too fast.)
I mean—I didn’t see anything. When I left, he was fine. Angry, yes. Alive.
Detective: Did you notice anyone else?
Kunal: No.
(Long pause.)
People think being close means being capable of murder.

Sometimes it just means being close enough to blame
`};

const params = new URLSearchParams(window.location.search);
const suspect = params.get("suspect");

const interviewText = document.getElementById("interview-text");
const audio = document.getElementById("bg-audio");

if (suspect && interviews[suspect]) {
  interviewText.textContent = interviews[suspect];
} else {
  interviewText.textContent = "ERROR: FILE CORRUPTED OR SUSPECT NOT FOUND.";
}

// autoplay attempt (browser-safe)
audio.volume = 0.2;
audio.play().catch(() => {
  console.log("Autoplay blocked — will start on first interaction.");
});

document.body.addEventListener("click", () => {
  audio.play().catch(() => {});
}, { once: true });



