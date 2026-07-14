import 'jest-canvas-mock';
const { TextDecoder, TextEncoder } = require('util');
const {
	ReadableStream,
	TransformStream,
	WritableStream
} = require('stream/web');
const { MessageChannel, MessagePort } = require('worker_threads');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;
global.TransformStream = TransformStream;
global.WritableStream = WritableStream;
global.MessageChannel = MessageChannel;
global.MessagePort = MessagePort;

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn()
	}))
});

const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

jest.mock('colorthief', () =>
	jest.fn().mockImplementation(() => ({
		getColor: jest.fn(() => [0, 0, 0])
	}))
);

configure({ adapter: new Adapter() });
