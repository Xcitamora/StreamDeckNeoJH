import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { ShowCurrentDate } from "./actions/show-current-date";

// Enable verbose logging for debugging.
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the date display action.
streamDeck.actions.registerAction(new ShowCurrentDate());

// Connect to the Stream Deck.
streamDeck.connect();