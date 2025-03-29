import { action, KeyDownEvent, SingletonAction, WillAppearEvent } from "@elgato/streamdeck";

@action({ UUID: "com.xcita.calender.dateDisplay" })
export class ShowCurrentDate extends SingletonAction {
	override onWillAppear(ev: WillAppearEvent): void {
		console.log("[DEBUG] onWillAppear fired!");
		ev.action.setTitle("SUN\n30\nMAR");
	}

	override async onKeyDown(ev: KeyDownEvent): Promise<void> {
		console.log("[DEBUG] onKeyDown fired!");
		await ev.action.setTitle("TOUCH!");
	}
}