<script setup lang="ts">
import { Terminal } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'

const PREFIX = '>'

const term = new Terminal()
const fitAddon = new FitAddon()
term.loadAddon(fitAddon)

// Open the terminal in #terminal-container
term.open(document.getElementById('terminal-container')!)

// Make the terminal's size and geometry fit the size of #terminal-container
fitAddon.fit()

term.onData((data) => {
  console.log('onData:', data, data.codePointAt(0))
  if (data === '\n' || data.codePointAt(0) === 13) {
    term.writeln(data)
  } else {
    term.write(data)
  }
})
</script>
