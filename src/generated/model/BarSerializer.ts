// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { Bar } from "@src/model/Bar";
import { JsonHelper } from "@src/io/JsonHelper";
import { VoiceSerializer } from "@src/generated/model/VoiceSerializer";
import { Clef } from "@src/model/Clef";
import { Ottavia } from "@src/model/Ottavia";
import { Voice } from "@src/model/Voice";
import { SimileMark } from "@src/model/SimileMark";
export class BarSerializer {
    public static fromJson(obj: Bar, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k, v)); 
    }
    public static toJson(obj: Bar | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("id", obj.id); 
        o.set("clef", obj.clef as number); 
        o.set("clefottava", obj.clefOttava as number); 
        o.set("voices", obj.voices.map(i => VoiceSerializer.toJson(i))); 
        o.set("similemark", obj.simileMark as number); 
        return o; 
    }
    public static setProperty(obj: Bar, property: string, v: unknown): boolean {
        switch (property) {
            case "id":
                obj.id = v! as number;
                return true;
            case "clef":
                obj.clef = JsonHelper.parseEnum<Clef>(v, Clef)!;
                return true;
            case "clefottava":
                obj.clefOttava = JsonHelper.parseEnum<Ottavia>(v, Ottavia)!;
                return true;
            case "voices":
                obj.voices = [];
                for (const o of (v as (Map<string, unknown> | null)[])) {
                    const i = new Voice();
                    VoiceSerializer.fromJson(i, o);
                    obj.addVoice(i);
                }
                return true;
            case "similemark":
                obj.simileMark = JsonHelper.parseEnum<SimileMark>(v, SimileMark)!;
                return true;
        } 
        return false; 
    }
}

