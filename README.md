# Tic-Tac-Toe (React + Vite)

    npm install
    npm run dev      # start the dev server
    npm run build    # production build in dist/

## Structure

    src/
      main.jsx                 entry point
      App.jsx                  game state (board, turn, score)
      styles.css               all styling, light + dark themes
      components/
        Board.jsx              3x3 grid
        Cell.jsx               one square
        Scoreboard.jsx         X / draws / O tally
      utils/
        getResult.js           win and draw detection
