// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// One line a gamer texts the boss to skip work on GTA 6 launch week.
// Judge: a tired manager who has heard every excuse twice and believes
// almost none of them. The winning angle is a real, specific, boring
// workplace detail — not a dead grandmother, a flat tyre, or a sudden fever.
// A bin lorry blocking the drive is exactly that: mundane, concrete,
// verifiable-sounding, and impossible to argue with from the office.
// No setup, no explanation, no signature — a text sent in a hurry.
// 38 characters, 8 words (gate: 1-140 characters, at most 20 words).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "Sorry, the bin lorry blocked my drive.";

const outputPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outputDir = outputPath.slice(0, outputPath.lastIndexOf("/")) || ".";
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_TEXT, "utf8");
