import React from 'react';
import Enzyme, {mount} from "enzyme";
import App from "../Containers/App";
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});


let strengthText = [
    {
        text: "Very Weak ☹",
        bgColor: "#e40808"
    },
    {
        text: "Weak ☹",
        bgColor: "#e40808"
    }, {
        text: "Medium ☹",
        bgColor: "#ffd800"
    }, {
        text: "Strong ☺",
        bgColor: "#2cb117"
    }, {
        text: "Very Strong ☻",
        bgColor: "#2cb117"
    }
];


describe("sample_test", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App/>);
    });
    test('render_input', () => {
        let input = wrapper.find('#input');
        expect(input.length).toEqual(1);
    });
    test('render_suggestion_and_strength_text_when_input_is_blank', () => {
        let input = wrapper.find('#input');
        input.simulate('change', {
            target: {
                value: 'zxzxzxz'
            }
        });
        let bar = wrapper.find("#bar");
        expect(bar.props()['style']['width']).toEqual(280);
        expect(bar.props()['style']['backgroundColor']).toEqual(strengthText[1].bgColor);

        let suggestion = wrapper.find('#suggestion');
        expect(suggestion.text()).toEqual('Add another word or two. Uncommon words are better.Avoid repeated words and characters');
        let result = wrapper.find('#result');
        expect(result.text()).toEqual(strengthText[1].text);

        input.simulate('change', {
            target: {
                value: ''
            }
        });

        result = wrapper.find('#result');
        expect(result.text()).toEqual('Enter Your Password');
        suggestion = wrapper.find('#suggestion');
        expect(suggestion.text()).toEqual('');
    });
    test('level_0_password_is_typed', () => {
        let input = wrapper.find('#input');
        input.simulate('change', {
            target: {
                value: '12121212121212121212121212'
            }
        });
        let bar = wrapper.find("#bar");
        expect(bar.props()['style']['width']).toEqual(140);
        expect(bar.props()['style']['backgroundColor']).toEqual(strengthText[0].bgColor);

        let suggestion = wrapper.find('#suggestion');
        expect(suggestion.text()).toEqual('Add another word or two. Uncommon words are better.Avoid repeated words and characters');
        let result = wrapper.find('#result');
        expect(result.text()).toEqual(strengthText[0].text);
    });
});
