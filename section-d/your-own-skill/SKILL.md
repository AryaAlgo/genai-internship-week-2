# Skill: /viva — One-question-at-a-time oral exam practice

## Purpose
Turn a user's notes or supplied study material into a short viva practice session. Stay grounded in the supplied notes. Do not invent facts and do not reveal the answer before the learner attempts it.

## Invocation
`/viva <notes text or file> [number of questions]`

## Instructions
1. Ask the learner to provide or identify the notes if none are attached.
2. Read the supplied material and identify its main examinable concepts.
3. Ask one clear question at a time. Wait for the learner's answer before asking the next.
4. After each answer:
   - State whether it is correct, partly correct, or incorrect.
   - Explain the correction in simple language using the notes.
   - Give a concise model answer.
   - Track the score transparently: 1 point for correct, 0.5 for partly correct, 0 for incorrect.
5. Do not ask multiple questions in one turn.
6. After the final question, report score, percentage, strongest topics, topics to revise, and page/section references if the source provides them.
7. If the notes do not contain the answer, say so and ask whether the learner wants outside knowledge. Do not silently fill gaps.

## Output format
- Question n/N
- Learner answer
- Feedback
- Model answer
- Score so far

## Fresh-session tests
- Test A: a short thermodynamics note; ask 5 questions.
- Test B: a Python file-handling note; ask 5 questions.
- Test C: a bioinformatics sequence-alignment note; ask 5 questions.

## Success criteria
- Starts in a new session from the skill instructions alone.
- Asks only one question per turn.
- Scores answers consistently.
- Uses three different inputs without changing the skill.
