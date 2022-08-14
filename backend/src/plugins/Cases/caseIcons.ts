import { CaseTypes } from "../../data/CaseTypes";

// These emoji icons are hosted on the Hangar server
// If you'd like your self-hosted instance to use these icons, check #add-your-bot on that server
export const caseIcons: Record<CaseTypes, string> = {
  [CaseTypes.Ban]: "<:case_ban:1008433920024510564>",
  [CaseTypes.Unban]: "<:case_unban:1008433954795311164>",
  [CaseTypes.Note]: "<:case_note:1008434165814935623>",
  [CaseTypes.Warn]: "<:case_warn:1008434226091278366>",
  [CaseTypes.Kick]: "<:case_kick:1008434264032952372>",
  [CaseTypes.Mute]: "<:case_mute:1008434285927223406>",
  [CaseTypes.Unmute]: "<:case_unmute:1008434358287356024>",
  [CaseTypes.Deleted]: "<:case_deleted:1008434419377373326>",
  [CaseTypes.Softban]: "<:case_softban:1008434423877877791>",
};
