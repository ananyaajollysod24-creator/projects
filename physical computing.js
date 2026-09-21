// ============================================================
// EDIT THIS FILE to change your panel text, images, and video.
// Nothing else in the project needs to change for everyday updates.
// ============================================================

const content = {

  concept: {
    title: 'Concept',
    w: 540, h: 700,
    body: `
      <h3>The Lost and found station</h3>
      <p>

This installation invites participants to express their loss of an inanimate object with intentions to revive/ find it. The visitor is surrounded by a welcoming and empathetic atmosphere which treats all emotions and feelings with callous fragility. <br>
Sentiment or value attached to an inanimate object often comes from the psychological tendency of a human being to attach human emotions or attributes to non- humans— Anthropomorphism. The idea of creating a lost and found station to provide masked comfort and help was inspired by a true story of a person who also lost his loved object (his late dog’s collar). When he tried to file a complaint the police officers refused to search for this item as it had “unsatisfactory” value in reality. He was then given a reconciliation form to cope with his loss which he framed and cherished in replacement for the lost collar. <br>
Ironically materialising emotion by attempting to transfer it into a replaced object in the form of a reconciliation form is our installation idea.<br>
The form includes personal questions about the lost item which here, we call “the loss”. Questions like, “What is the loss?” “When did you lose it?” “Describe the loss” “Where was it last seen?”. Questions that probe and require the user to recollect their memories and pour out their emotions related to “the loss” in the moment. <br>
As they respond to a sequence of formal, bureaucratic questions, their voice is transcribed in real time while their pulse is monitored. Emotional intensity is converted into a measurable value, which determines the “worth” of the loss within the generated report. Simultaneously, revealing images of previous participants receiving similar documents from the same figure and a mysteriously situated printer.<br>
At the end of the interaction, the system produces a printed FIR marked “FOUND,” despite no real recovery taking place. Turning around, the participant faces a “wall of fame” that normalizes this exchange. The work reflects on institutional gestures of care that translate vulnerability into data, offering symbolic closure while withholding meaningful resolution.<br>
.</p>
      <p class="cross-links">See also:
        <a href="#" data-open="experience">Experience</a> ·
        <a href="#" data-open="documentation">Documentation</a>
      </p>
    `
  },

  experience: {
    title: 'Experience',
    w: 540, h: 700,
    body: `
      <h3>Mini game</h3>
      <p>This placeholder tap-counter stands in for your real interactive
      piece. To embed an actual game, replace the button below with
      either of these:</p>
      <p><strong>Option A — a game hosted elsewhere (itch.io, etc):</strong></p>
      <p><code>&lt;iframe src="https://your-game-url" width="100%" height="200"&gt;&lt;/iframe&gt;</code></p>
      <p><strong>Option B — a game file you host yourself:</strong> put the
      game's files in assets/game/ and point the iframe's src at
      assets/game/index.html instead.</p>
      <div class="mini-game">
        <button id="tapBtn">tap</button>
        <span class="score">score: <span id="scoreVal">0</span></span>
      </div>
      <p class="cross-links">See also:
        <a href="#" data-open="concept">Concept</a> ·
        <a href="#" data-open="documentation">Documentation</a>
      </p>
    `
  },

  documentation: {
    title: 'Documentation',
    w: 540, h: 700,
    body: `
      <h3>Documentation</h3>
      <p>Real photos and video, pulled straight from the assets folder.
      Add more &lt;img&gt; or &lt;video&gt; lines the same way to grow this grid —
      no limit on how many.</p>
      <div class="doc-grid">
        <img class="doc-media" src="assets/photos/photo1.jpg" alt="Documentation photo 1">
        <img class="doc-media" src="assets/photos/photo2.jpg" alt="Documentation photo 2">
        <video class="doc-media" src="assets/video/clip1.mp4" controls></video>
        <div class="doc-tile">add more here</div>
      </div>
      <p class="cross-links">See also:
        <a href="#" data-open="concept">Concept</a> ·
        <a href="#" data-open="experience">Experience</a>
      </p>
    `
  }

};
