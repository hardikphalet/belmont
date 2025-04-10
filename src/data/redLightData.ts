export interface Person {
  title: string;
  description: string;
  relationships: string[];
  unlocked: boolean;
  links: Array<{
    text: string;
    target: string;
    type: "person" | "location";
  }>;
}
export interface Location {
  description: string;
  evidence: string[];
  unlocked: boolean;
  links: Array<{
    text: string;
    target: string;
    type: "person" | "location";
  }>;
}
export const people: Record<string, Person> = {
  "Lady Eleanor Belmont": {
    title: "Lady Eleanor Belmont - Victim",
    description: `
    One does not amass a fortune without making a few enemies, and Lady Eleanor Belmont had more than her fair share. Born into a dynasty of opulence, she fled France amidst the shadows of the Great War, weaving a sinister web that ensured the Belmont wealth would not only endure but flourish. 
    By the time the Second War broke, she had positioned herself as the indispensable supplier of war machines, only to reinvent herself as the magnanimous patron of reconstruction. 
    It was, by all accounts, a masterstroke. And now she is dead. 
    Sir Alistair Belmont found her at precisely 9:32 on a Monday morning, her lifeblood pooled upon the floor in a macabre farewell. 
    The Coroner's report speaks of an incision, deliberate and precise, upon a major vein. It was not the work of an amateur. 
    Rumors abound of her final days—her increasing hours spent within the confines of The Library, her dealings, always conducted in whispers, and the enemies she kept closer than her kin. 
    In death, she has left behind a vacuum, and the vultures circle hungrily.`,
    relationships: [
      "Married to Sir Alistair Belmont",
      "Mother of Margaret and Sebastian Belmont",
      "Had strained relationship with Ravine Belmont",
    ],
    unlocked: true,
    links: [
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "the library",
        target: "The Library",
        type: "location",
      },
      {
        text: "report",
        target: `Coroner's Report`,
        type: "location",
      },
    ],
  },
  "Sir Alistair Belmont": {
    title: "Sir Alistair Belmont - Person of Interest",
    description: `Sir Alistair Belmont wears his title as he wears his waistcoats—too tight and slightly askew. 
    Once a French debauchee, he slid effortlessly from the obligations of war into the arms of the formidable Eleanor, enticed less by her beauty than by her wealth. 
    His once-celebrated locks have turned silver; his limp (a war injury he exaggerates) affords him a measure of sympathy he otherwise finds in short supply. 
    
    When the investigators arrived, they found him lamenting a misplaced razor—an odd preoccupation given the circumstances. A dandy with a scent of bergamot and regret, he spends most of his time locked in his quarters, speaking to no one. 
    A grieving husband, or a man with something to hide? The answer, one suspects, lies in the details.. 
    He has been seen arguing with Julian Peabody recently. 
    
    Peabody's notes: 
    Born into minor French nobility, fled to England during WWI to avoid conscription. 
    Married Eleanor for her money after meeting her at a Parisian arms dealers party. 
    Secretly writes terrible poetry under the pen name "The Lonely Marquis." 
    Hates the sound of ticking clocks (thus, his quarters have only hourglasses). 
    Keeps a pet canary named "Bismarck" that sings off-key.`,
    relationships: [
      "Husband of Lady Eleanor Belmont",
      "Father of Margaret and Sebastian Belmont",
      "Has been seen arguing with Julian Peabody recently",
    ],
    unlocked: false,
    links: [
      {
        text: "quarters",
        target: "Sir Alistair's Quarters",
        type: "location",
      },
      {
        text: "Sebastian's Laboratory",
        target: "Sebastian's Laboratory (Restricted Access)",
        type: "location",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Margaret Belmont",
        target: "Margaret Belmont",
        type: "person",
      },
      {
        text: "Sebastian Belmont",
        target: "Sebastian Belmont",
        type: "person",
      },
      {
        text: "Julian Peabody",
        target: "Julian Peabody",
        type: "person",
      },
    ],
  },
  "Margaret Belmont": {
    title: "Margaret Belmont - Person of Interest",
    description: `Margaret Belmont does not suffer fools. Cold, calculating, and possessing a beauty that could make a man forget his better judgment, she is, in every way, her mother’s daughter. 
    The world knows her as a woman of rare intellect and sharper ambition. The Americans wish to claim her for Hollywood, but she has declined their advances with the same cool efficiency she applies to all matters.
    She keeps to herself in the estate, but the staff have their whispers. A collector of vintage poison bottles—purely decorative, or so one assumes. 
    A woman who speaks six languages but allows others to think her ignorant of Russian. 
    
    A woman who, when asked about her brother, merely states: “Sebastian is peculiar. He loves his books, neglects his wife, and idolized our mother in a way I never understood.”
    One might be inclined to believe her. One might, also, be mistaken. Mostly stays in her study.`,
    relationships: [
      "Daughter of Lady Eleanor and Sir Alistair Belmont",
      "Sister of Sebastian Belmont",
      "Has been seen meeting with Julian Peabody in secret",
    ],
    unlocked: false,
    links: [
      {
        text: "study",
        target: "Margaret's Study",
        type: "location",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "Sebastian",
        target: "Sebastian Belmont",
        type: "person",
      },
      {
        text: "Julian Peabody",
        target: "Julian Peabody",
        type: "person",
      },
    ],
  },
  "Sebastian Belmont": {
    title: "Sebastian Belmont - Person of Interest",
    description: `Sebastian Belmont does not meet your gaze. He stares just past your left ear, as if addressing someone only he can see. Ink stains his fingers, his glasses magnify his calm, disquieting eyes, and his mind—so they say—is brilliant beyond measure. 
    His alibi is airtight. He was in Oxford when his mother died, giving a lecture on matters beyond mortal comprehension. 
    And yet, the staff speak of his melancholy, of his keys, found upon his person, that grant access to a place where knowledge and secrets are stored alike. 
    His wife, Ravine, is of no consequence to him—he says so himself. Perhaps that is true. Perhaps, however, he underestimates her.`,
    relationships: [
      "Son of Lady Eleanor and Sir Alistair Belmont",
      "Brother of Margaret Belmont",
      "Has been seen receiving suspicious packages at The Library",
    ],
    unlocked: false,
    links: [
      {
        text: "place",
        target: "Sebastian's Laboratory (Restricted Access)",
        type: "location",
      },
      {
        text: "Ravine",
        target: "Ravine Belmont",
        type: "person",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "Margaret Belmont",
        target: "Margaret Belmont",
        type: "person",
      },
    ],
  },
  "Julian Peabody": {
    title: "Julian Peabody - Person of Interest",
    description: `A man of many talents, few of them useful, Julian Peabody has the bearing of a rake and the instincts of a rat. Once a journalist, now a lawyer—and possibly something more—he moves through the Belmont estate with the air of a man who knows too much. 
    A fixture in Margaret Belmont’s affairs (legal and otherwise), he has been seen in whispered conversations with more than one member of the family since Eleanor’s demise. 
    His past is a patchwork of curiosities: an Oxford education abandoned in favor of scandal, a brief dalliance as a magician’s assistant, and a tattoo of a quill upon his thigh—ironic, he claims, though one doubts he fully understands the term. His silver flask contains nothing stronger than ginger tea, but his secrets, should they come to light, may prove intoxicating indeed. Evidence suggests he may have been involved in the blackmail operations and could be attempting to leverage his knowledge for personal gain.`,
    relationships: [
      "Was blackmailing Lady Eleanor Belmont",
      "Has been arguing with Sir Alistair Belmont",
      "Meets secretly with Margaret Belmont",
    ],
    unlocked: false,
    links: [
      {
        text: "The Gardens",
        target: "The Gardens (Fire Pit)",
        type: "location",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "Margaret Belmont",
        target: "Margaret Belmont",
        type: "person",
      },
    ],
  },
  "Ravine Belmont": {
    title: "Ravine Belmont - Person of Interest",
    description: `Ravine Belmont, a distant relative who recently moved into the estate, maintains a private sitting room where she creates detailed sketches of the family members. Her artwork has been described as "disturbing" by staff members. She moves like a shadow, sketches as though possessed, and will not eat food unless it conforms to perfect geometry. A woman of curious contradictions, Ravine Belmont was born into deception, the daughter of a master forger, raised among the great works of art—both real and counterfeit. Her marriage to Sebastian was one of quiet understanding. He did not demand conversation, and she did not offer it. She has, however, been seen in the company of the butler—a man of no consequence, or so it is said. Perhaps, in her silent observations, she has seen more than others suspect. She has been seen spending time in The Library, particularly in sections related to family history and genealogy.`,
    relationships: [
      "Had strained relationship with Lady Eleanor Belmont",
      "Spends time with staff members",
      "Has been seen sketching family members in compromising situations",
    ],
    unlocked: false,
    links: [
      {
        text: "Ravine's Sketchbook",
        target: "Ravine's Sketchbook (Private Sitting Room)",
        type: "location",
      },
      {
        text: "The Library",
        target: "The Library",
        type: "location",
      },
      {
        text: "butler",
        target: "Butler",
        type: "person",
      },
      {
        text: "Staff Quarters",
        target: "Staff Quarters (Maid's Room)",
        type: "location",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
    ],
  },
  Butler: {
    title: "Butler - Person of Interest",
    description: `A man of skeletal frame and gravelled voice, the Belmont butler has served longer than most, his expression as unreadable as the ciphers he writes for amusement. A former cryptographer, dismissed from Windsor Castle for what was deemed an excess of tidiness, he now moves through Belmont Estate with quiet precision. He hums ‘God Save the Queen’ when nervous. He has balanced a teacup on his head for precisely forty-seven minutes. And he has, above all, kept the family’s secrets. For now.`,
    relationships: ["Spends time with Ravine Belmont"],
    unlocked: false,
    links: [
      {
        text: "Ravine Belmont",
        target: "Ravine Belmont",
        type: "person",
      },
    ],
  },
};
export const locations: Record<string, Location> = {
  "Lady Eleanor's Bedroom (Crime Scene)": {
    description: `The primary crime scene where Lady Eleanor Belmont was found dead. The room does not shows signs of a struggle, with overturned furniture and scattered papers. 
    Key evidence includes: - A broken teacup with traces of an unknown substance - Burned documents in the fireplace - A hidden compartment in the wall containing various letters.

    The heavy oak door creaked open, revealing a chamber frozen in time. The air smelled of rosewater and something metallic—copper, perhaps, or the ghost of gunpowder. Lady Eleanor sat slumped at her vanity, as though she had merely paused mid-thought. The mirror before her reflected nothing now but the ghastly crimson splash across its surface. A stopped clock ticked no more, its hands forever fixed at half-past nine. On the nightstand, a faint scorch mark marred the polished wood, like the kiss of a devil no one had seen.`,
    evidence: [
      "Broken teacup with unknown substance",
      "Burned documents in fireplace",
      "Ledgers of transactions with Julian Peabody and Margaret Belmont",
      "A burnt copy of: The Lonely Marquis",
      "No signs of struggle or overturned furniture",
      "Stopped Clock: Frozen at 9:32 AM—mechanism tampered with.",
      "Missing Item: A pair of pearl-handled panties",
      "A distinctively strong, mettalic scent",
    ],
    unlocked: true,
    links: [
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
    ],
  },
  "Coroner's Report": {
    description: `CORONER'S REPORT Case No.: 78-0324 
    Deceased: Lady Eleanor Catherine Belmont 
    Age: 81 
    Date of Death: 31 March 1978 
    Time of Death: Approximately 09:15 - 09:35 (see Note 1) 
    Location: Belmont House, Winchester, Hampshire 
    Reporting Pathologist: Dr. Reginald Montague, MD, FRCPath 
    
    I. EXTERNAL EXAMINATION 
    A. General Observations: Well-nourished female, 5'7", 128 lbs. Evidence of recent weight loss (3-4 kg over past month). 
    Rigor mortis fully established; livor mortis fixed along posterior aspect (consistent with supine positioning post-mortem). Hands manicured, no defensive wounds. Left wrist shows faint bruising (old, likely 4-5 days prior). 
    B. Fatal Injury: Single deep incised wound to anterior neck, measuring 8.7 cm in length. 
    Entry Point: 2 cm below left mandibular angle, terminating 1 cm above right clavicle. Depth: Varies from 1.2 cm (superficial) to 3.4 cm (transecting right carotid artery). Margins: Clean, no serration. Hesitation marks (3 shallow parallel cuts) noted at inferior terminus. Directionality: Left-to-right downward stroke (mechanical assailant or self-inflicted). 
    C. Anomalous Findings: Microscopic burns along wound edges (consistent with thermal injury prior to laceration). 
    Absence of spatter on sleeves/blouse (suggesting victim did not raise arms defensively).  
    
    II. INTERNAL EXAMINATION 
    A. Cardiovascular System: Severe atherosclerosis of coronary arteries. Right carotid artery 80% transected; minimal blood in trachea (rapid exsanguination). 
    B. Microscopic Analysis: Wound Tissue: Carbon particles embedded in dermis (laser/electrocautery residue?). Fingernails: Clean, no foreign DNA. 
    
    III. TIME OF DEATH ESTIMATE Primary Indicators: Core Temperature: 28.6°C at 11:00 AM (supports death ~90 mins prior). Gastric Emptying: Partial (last meal 1-2 hours pre-mortem). Clock Discrepancy: Stopped at 09:32, but liver algor suggests 09:15-09:20. Conclusion: Death likely occurred prior to 09:32. Clock may have been tampered with. 
    
    IV. OPINION Cause of Death: Exsanguination secondary to sharp-force trauma. 
    Manner of Death: Homicide (Note 2) Supporting Evidence: Hesitation marks suggest possible self-infliction, but: Burn anomalies indicate pre-laceration injury (inconsistent with blade). 
    Absence of weapon contradicts suicide. Timeline manipulation (stopped clock) indicates staging. 
    
    Note 1: Discrepancy between liver temp (supports 09:15) and rigor (suggests 09:30) unresolved. 
    Note 2: Highly unusual case. Recommend consultation with forensic physicist re: thermal injury. 
    
    V. ATTACHMENTS Photographs (12) 
    – Wound close-ups, burn patterns. Evidence Log 
    – Scorch-mark samples sent to Ballistics.`,
    evidence: [],
    unlocked: false,
    links: [
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
    ],
  },
  "Sir Alistair's Quarters": {
    description: `Sir Alistair's private quarters have been sealed off since his wife's death. The room contains various family heirlooms and documents that could be relevant to the investigation.
    A dimly lit sanctuary of leather and liquor, where the scent of bay rum and bourbon clung to the curtains. The bed was neatly made—too neatly, as though no one had slept in it. A silver razor lay abandoned on the washstand, its edge suspiciously clean. A half-empty bottle of whiskey bore a label in Sir Alistair’s flamboyant script: "To forgetting her." Beneath the mattress, a corner of parchment peeked out—a blueprint, its lines too precise for comfort.`,
    evidence: [
      'Razor Case: Missing one straight razor (his "shaving alibi" is suspicious).',
      "Bloodied Towel: Small cut on his cheek—consistent with a slip, but timing is off.",
      'Whiskey Bottle: Half-empty, label reads "To forgetting her" (dated the night before).',
      "Recent correspondence with Julian Peabody",
      'A crumpled note: "She always loved him more."',
    ],
    unlocked: false,
    links: [
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "Sebastian's Laboratory",
        target: "Sebastian's Laboratory (Restricted Access)",
        type: "location",
      },
      {
        text: "Julian Peabody",
        target: "Julian Peabody",
        type: "person",
      },
    ],
  },
  "Sebastian's Laboratory (Restricted Access)": {
    description: `A private laboratory with restricted access, maintained by Sebastian Belmont. The room contains various scientific equipment and chemical substances. Recent activity suggests the development of some form of chemical agent, though the purpose remains unknown.`,
    evidence: [
      'Laser Schematics: Notes on "pulsed light amplification" (labeled "Project Luminous").',
      "Recent experiment notes",
      "Burned Components: Melted glass and copper wiring in the trash",
      "Upon the second visit, the equipment was gone leaving the scent from Eleanor's room.",
      "Footprints matching Sir Alistair's shoes",
      "A dried rose in a drawer—same as Eleanor's signature scent.",
      "A pair of panties in a drawer",
    ],
    unlocked: false,
    links: [
      {
        text: "Sebastian Belmont",
        target: "Sebastian Belmont",
        type: "person",
      },
      {
        text: "Sir Alistair Belmont",
        target: "Sir Alistair Belmont",
        type: "person",
      },
      {
        text: "The Library",
        target: "The Library",
        type: "location",
      },
    ],
  },
  "Margaret's Study": {
    description: `Margaret's private study contains extensive documentation about the family's business dealings. Recent intelligence suggests she may have been aware of her mother's blackmail activities. The room contains various ledgers and correspondence that could be relevant to the investigation.`,
    evidence: [
      "Business ledgers and documents",
      "Secret correspondence",
      "Recent meeting notes with Julian Peabody",
      "Hidden safe with unknown contents",
      "Contract Drafts: Business deals with American investors (motive to control the estate).",
      'Hidden Ledger: Lists payments to "J. Peabody—Discretionary Services."',
      'Letter from Warner Bros.: Offering a film deal—"Your life story is a thriller, Margaret."',
      "Locked Drawer: Contains Eleanor’s pearl hairbrush (stolen to frame Alistair?).",
    ],
    unlocked: false,
    links: [
      {
        text: "Margaret Belmont",
        target: "Margaret Belmont",
        type: "person",
      },
      {
        text: "Julian Peabody",
        target: "Julian Peabody",
        type: "person",
      },
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
    ],
  },
  "The Library": {
    description: `The family's extensive library contains rare books and historical documents. Lady Eleanor spent most of her time here in the weeks leading up to her death. Recent surveillance has revealed suspicious activity, including secret meetings and the delivery of suspicious packages.`,
    evidence: [
      "Recent delivery records",
      "Disturbed books and documents",
      "Hidden compartments in shelves",
      "Footprints matching multiple family members",
      "Sebastian’s Alibi Book: Plutarch’s Lives—dusty, untouched for weeks.",
      "Coded Notes: Scribbled in margins of a physics text (solvable with Sebastian’s cipher).",
      'Julian’s Fingerprints: On a book about "Advanced Optics" (unusual for a secretary).',
    ],
    unlocked: false,
    links: [
      {
        text: "Lady Eleanor Belmont",
        target: "Lady Eleanor Belmont",
        type: "person",
      },
      {
        text: "Sebastian Belmont",
        target: "Sebastian Belmont",
        type: "person",
      },
      {
        text: "Ravine Belmont",
        target: "Ravine Belmont",
        type: "person",
      },
    ],
  },
  "The Gardens (Fire Pit)": {
    description: `The estate's gardens contain a fire pit where various documents have been burned recently. Julian Peabody has been seen meeting with family members here. Recent evidence suggests the fire pit has been used to destroy potentially incriminating evidence.`,
    evidence: [
      "Recently burned documents",
      "Footprints matching Julian Peabody",
      "Hidden meeting spot",
      "Various personal items",
    ],
    unlocked: false,
    links: [
      {
        text: "Julian Peabody",
        target: "Julian Peabody",
        type: "person",
      },
      {
        text: "Margaret Belmont",
        target: "Margaret Belmont",
        type: "person",
      },
    ],
  },
  "Ravine's Sketchbook (Private Sitting Room)": {
    description: `Ravine's private sitting room contains her extensive collection of sketches depicting family members in various situations. The artwork has been described as "disturbing" by staff members. The room also contains various family history documents and genealogy records.`,
    evidence: [
      "Disturbing sketches of family members",
      "Family history documents",
      "Genealogy records",
      "Recent correspondence",
    ],
    unlocked: false,
    links: [
      {
        text: "Ravine Belmont",
        target: "Ravine Belmont",
        type: "person",
      },
      {
        text: "The Library",
        target: "The Library",
        type: "location",
      },
    ],
  },
  "Staff Quarters (Maid's Room)": {
    description: `The staff quarters, particularly the maid's room, contain various personal items and documents that could be relevant to the investigation. Ravine has been seen spending time here. Recent intelligence suggests some staff members may have been involved in the blackmail operations.`,
    evidence: [
      "Personal items belonging to staff",
      "Recent correspondence",
      "Hidden documents",
      "Footprints matching Ravine Belmont",
    ],
    unlocked: false,
    links: [
      {
        text: "Ravine Belmont",
        target: "Ravine Belmont",
        type: "person",
      },
    ],
  },
};
