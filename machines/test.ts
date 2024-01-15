import { createMachine } from "xstate";

const machine = createMachine({
/** @xstate-layout N4IgpgJg5mDOIC5QBc7IHQDkwHcAEsyAhqngIxkDEAxgDYCW1A1gNoAMAuoqAA4D2sesnp8AdtxAAPRAGYAbOgAcZAEwBWADQgAnojJsAnAF8TW0XwhwJqQhP6DhYidIQBaFQBZ0ctXPVbdNxkvNVMQGwxsfEISMHIyOwEhEXEkKUQVGXRgmQB2TR1EDyyC5D4eIpKtWjAAM2QMrJz8rQAneigACwaEMmLs4paQHHoIZE69FTYtACM+ZDKAW0QDMnQCzrAO7qLFExMgA */
  states: {
    "New state 11": {
      on: {
        click: "New state 11"
      }
    }
  },

  initial: "New state 11"
});
