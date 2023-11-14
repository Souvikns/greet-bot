var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, time } = event.payload;
        const t = new Date(time);
        const curHr = t.getHours();
        let response = '';
        if (curHr < 12) {
            response = `Good Morning ${name}`;
        }
        else if (curHr < 18) {
            response = `Good Afternoon ${name}`;
        }
        else {
            response = `Good Evening ${name}`;
        }
        return {
            reply: [
                {
                    payload: response,
                },
            ],
        };
    });
}
