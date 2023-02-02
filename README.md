# FlashCards


## Install & Setup

1. On the top right corner of this page, click the **Fork** button.

2. Clone down the forked repo using this terminal command:

```bash
git clone [remote-address] [what you want to name the repo]
```

3. Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

4. To verify that it is setup correctly, run `npm test` in your terminal. You should have 44 passing tests.

5. Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Welcome to FlashCards! You are playing with 30 cards.
```

6. Select your answer to each flashcard by typing the number of the corresponding choice or by using the arrow keys and enter. Press enter again to continue to the next card.

7. After answering all 30 flashcards you should see the following message being displayed in your terminal:

```bash
**Round over!** You answered [Your percent]% of the questions correctly!
```

8. Run command `node index.js` to play again!
