"use client";

import { ThemeProvider } from "@myst-theme/providers";
import { MyST, DEFAULT_RENDERERS, Details } from "myst-to-react";

export default function MySTComponent() {
	return (
		<section className="container grid items-center gap-6 pb-8 md:py-10">
			<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
				<ThemeProvider renderers={DEFAULT_RENDERERS}>
					{/* <MyST
						ast={{
							type: "text",
							kind: "tex",
							value: "This is a test of the MyST component.",
							title: "Markedly Structured Text",

							// children:
							// value:
							// identifier:
							// label:
							// position:
						}}
					/> */}
					<MyST
						ast={{
							type: "root",
							children: [
								{
									type: "block",
									position: { start: { offset: 141, line: 11, column: 1 }, end: { offset: 149, line: 11, column: 9 } },
									children: [
										{
											type: "heading",
											position: { start: { offset: 141, line: 11, column: 1 }, end: { offset: 149, line: 11, column: 9 } },
											depth: 2,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 150, line: 11, column: 10 },
														end: { offset: 158, line: 11, column: 18 },
													},
													value: "Overview",
													key: "wQuBQa7SI9",
												},
											],
											identifier: "overview",
											label: "Overview",
											html_id: "overview",
											implicit: true,
											key: "ztsJOJH9ps",
										},
										{
											type: "paragraph",
											position: { start: { offset: 161, line: 12, column: 1 }, end: { offset: 168, line: 12, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 161, line: 12, column: 1 },
														end: { offset: 168, line: 12, column: 8 },
													},
													value: "Quantum mechanics is a fundamental theory in physics that describes the behavior of particles at the microscopic level. It provides a mathematical framework for understanding the wave-particle duality of matter and the probabilistic nature of physical phenomena.",
													key: "WTzoDxev7r",
												},
											],
											key: "EPWqb6R99V",
										},
									],
									key: "a3oBzwz00t",
								},
								{
									type: "block",
									position: { start: { offset: 427, line: 14, column: 1 }, end: { offset: 435, line: 14, column: 9 } },
									children: [
										{
											type: "heading",
											position: { start: { offset: 427, line: 14, column: 1 }, end: { offset: 435, line: 14, column: 9 } },
											depth: 2,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 436, line: 14, column: 10 },
														end: { offset: 439, line: 14, column: 13 },
													},
													value: "Key Concepts",
													key: "XEKc6MsBDm",
												},
											],
											identifier: "key-concepts",
											label: "Key Concepts",
											html_id: "key-concepts",
											implicit: true,
											key: "T14NnJuOqY",
										},
										{
											type: "paragraph",
											position: { start: { offset: 451, line: 15, column: 1 }, end: { offset: 456, line: 15, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 451, line: 15, column: 1 },
														end: { offset: 456, line: 15, column: 6 },
													},
													value: "There are several key concepts in quantum mechanics that are essential to understanding the theory:",
													key: "yXHzVFmUsI",
												},
											],
											key: "GUjRIn1gTx",
										},
										{
											type: "list",
											position: { start: { offset: 554, line: 17, column: 1 }, end: { offset: 1424, line: 23, column: 14 } },
											ordered: false,
											children: [
												{
													type: "listItem",
													position: {
														start: { offset: 573, line: 18, column: 3 },
														end: { offset: 578, line: 18, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 573, line: 18, column: 3 },
																end: { offset: 578, line: 18, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 573, line: 18, column: 3 },
																		end: { offset: 578, line: 18, column: 8 },
																	},
																	value: "Wave-particle duality: Particles such as electrons and photons can exhibit both wave-like and particle-like behavior, depending on the experimental setup.",
																	key: "vwS16uHw2I",
																},
															],
															key: "cST8q2Y6jG",
														},
													],
													key: "hNK5Pp9Jqd",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 737, line: 19, column: 3 },
														end: { offset: 742, line: 19, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 737, line: 19, column: 3 },
																end: { offset: 742, line: 19, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 737, line: 19, column: 3 },
																		end: { offset: 742, line: 19, column: 8 },
																	},
																	value: "Superposition: Quantum systems can exist in multiple states simultaneously, thanks to the principle of superposition.",
																	key: "igBlRn3gtZ",
																},
															],
															key: "OQPd4JfXJv",
														},
													],
													key: "erNCnGVX5A",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 864, line: 20, column: 3 },
														end: { offset: 869, line: 20, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 864, line: 20, column: 3 },
																end: { offset: 869, line: 20, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 864, line: 20, column: 3 },
																		end: { offset: 869, line: 20, column: 8 },
																	},
																	value: "Measurement and collapse: When a quantum system is measured, its wavefunction collapses to a single state, corresponding to the observed measurement outcome.",
																	key: "OmzgEYfNiW",
																},
															],
															key: "V9P9QEsNxO",
														},
													],
													key: "uJ9TsNF1SC",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 1031, line: 21, column: 3 },
														end: { offset: 1036, line: 21, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 1031, line: 21, column: 3 },
																end: { offset: 1036, line: 21, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 1031, line: 21, column: 3 },
																		end: { offset: 1036, line: 21, column: 8 },
																	},
																	value: "Uncertainty principle: There is a fundamental limit to the precision with which certain pairs of physical properties, such as position and momentum, can be simultaneously known.",
																	key: "PZma3ZdKSC",
																},
															],
															key: "CU8yTq9OnE",
														},
													],
													key: "ZJJQtlyGTx",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 1218, line: 22, column: 3 },
														end: { offset: 1223, line: 22, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 1218, line: 22, column: 3 },
																end: { offset: 1223, line: 22, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 1218, line: 22, column: 3 },
																		end: { offset: 1223, line: 22, column: 8 },
																	},
																	value: "Quantum entanglement: Two or more particles can become entangled, such that the state of one particle is dependent on the state of the other(s), regardless of the distance between them.",
																	key: "WZIJK37M4t",
																},
															],
															key: "JU5nvWrlLz",
														},
													],
													key: "weC0k5elBr",
												},
											],
											key: "aFg7h89q6n",
										},
									],
									key: "OZYrhMpw3q",
								},
								{
									type: "block",
									position: { start: { offset: 1428, line: 25, column: 1 }, end: { offset: 1436, line: 25, column: 9 } },
									children: [
										{
											type: "heading",
											position: { start: { offset: 1428, line: 25, column: 1 }, end: { offset: 1436, line: 25, column: 9 } },
											depth: 2,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 1437, line: 25, column: 10 },
														end: { offset: 1449, line: 25, column: 22 },
													},
													value: "Applications",
													key: "H0c1Lr8VWt",
												},
											],
											identifier: "applications",
											label: "Applications",
											html_id: "applications",
											implicit: true,
											key: "WksfhZdKtf",
										},
										{
											type: "paragraph",
											position: { start: { offset: 1452, line: 26, column: 1 }, end: { offset: 1459, line: 26, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 1452, line: 26, column: 1 },
														end: { offset: 1459, line: 26, column: 8 },
													},
													value: "Quantum mechanics has numerous applications in various fields, including:",
													key: "DsH1qTGZnh",
												},
											],
											key: "agH5ylzwAZ",
										},
										{
											type: "list",
											position: { start: { offset: 1529, line: 28, column: 1 }, end: { offset: 2168, line: 32, column: 14 } },
											ordered: false,
											children: [
												{
													type: "listItem",
													position: {
														start: { offset: 1548, line: 29, column: 3 },
														end: { offset: 1553, line: 29, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 1548, line: 29, column: 3 },
																end: { offset: 1553, line: 29, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 1548, line: 29, column: 3 },
																		end: { offset: 1553, line: 29, column: 8 },
																	},
																	value: "Quantum computing: Quantum computers leverage the principles of quantum mechanics to perform certain computations much faster than classical computers.",
																	key: "Z5dgJAbjXd",
																},
															],
															key: "xS02oX5AkW",
														},
													],
													key: "UoftuVtIyr",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 1709, line: 30, column: 3 },
														end: { offset: 1714, line: 30, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 1709, line: 30, column: 3 },
																end: { offset: 1714, line: 30, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 1709, line: 30, column: 3 },
																		end: { offset: 1714, line: 30, column: 8 },
																	},
																	value: "Quantum cryptography: Quantum mechanics provides a secure method for transmitting information, as any attempt to intercept the communication would disturb the quantum state and be detectable.",
																	key: "p7npkqXVSc",
																},
															],
															key: "PuqvxkrHYG",
														},
													],
													key: "zig2c8S1xe",
												},
												{
													type: "listItem",
													position: {
														start: { offset: 1910, line: 31, column: 3 },
														end: { offset: 1915, line: 31, column: 8 },
													},
													children: [
														{
															type: "paragraph",
															position: {
																start: { offset: 1910, line: 31, column: 3 },
																end: { offset: 1915, line: 31, column: 8 },
															},
															children: [
																{
																	type: "text",
																	position: {
																		start: { offset: 1910, line: 31, column: 3 },
																		end: { offset: 1915, line: 31, column: 8 },
																	},
																	value: "Quantum physics research: Quantum mechanics is the foundation for studying and understanding the behavior of particles and systems at the quantum level, leading to advancements in fields such as materials science, chemistry, and biology.",
																	key: "DFbDYmCBqO",
																},
															],
															key: "pEQdGeGCp7",
														},
													],
													key: "QEnrJgbQyP",
												},
											],
											key: "hdCGnsmGg0",
										},
									],
									key: "QS9HasNExf",
								},
								{
									type: "block",
									position: { start: { offset: 2172, line: 34, column: 1 }, end: { offset: 2180, line: 34, column: 9 } },
									children: [
										{
											type: "heading",
											position: { start: { offset: 2172, line: 34, column: 1 }, end: { offset: 2180, line: 34, column: 9 } },
											depth: 2,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2181, line: 34, column: 10 },
														end: { offset: 2191, line: 34, column: 20 },
													},
													value: "Conclusion",
													key: "HxBHIAMZyK",
												},
											],
											identifier: "conclusion",
											label: "Conclusion",
											html_id: "conclusion",
											implicit: true,
											key: "raaHINAu72",
										},
										{
											type: "paragraph",
											position: { start: { offset: 2194, line: 35, column: 1 }, end: { offset: 2201, line: 35, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2194, line: 35, column: 1 },
														end: { offset: 2201, line: 35, column: 8 },
													},
													value: "Quantum mechanics is a fascinating and powerful theory that has revolutionized our understanding of the physical world. Its principles and applications continue to drive scientific research and technological advancements in various fields.",
													key: "XaWu8gRkMx",
												},
											],
											key: "iup0u7jFNw",
										},
									],
									key: "jqTF4NoQhn",
								},
								{
									type: "block",
									position: { start: { offset: 2437, line: 37, column: 1 }, end: { offset: 2445, line: 37, column: 9 } },
									children: [
										{
											type: "heading",
											position: { start: { offset: 2437, line: 37, column: 1 }, end: { offset: 2445, line: 37, column: 9 } },
											depth: 2,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2446, line: 37, column: 10 },
														end: { offset: 2455, line: 37, column: 19 },
													},
													value: "Equations from Quantum Mechanics",
													key: "MWXNCUlScd",
												},
											],
											identifier: "equations-from-quantum-mechanics",
											label: "Equations from Quantum Mechanics",
											html_id: "equations-from-quantum-mechanics",
											implicit: true,
											key: "Nr47kK5EUH",
										},
										{
											type: "heading",
											position: { start: { offset: 2483, line: 39, column: 1 }, end: { offset: 2494, line: 39, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2495, line: 39, column: 13 },
														end: { offset: 2506, line: 39, column: 24 },
													},
													value: "Schrödinger Equation",
													key: "UbfZQJjQQz",
												},
											],
											identifier: "schr-dinger-equation",
											label: "Schrödinger Equation",
											html_id: "schr-dinger-equation",
											implicit: true,
											key: "wxIxAj2Whp",
										},
										{
											type: "paragraph",
											position: { start: { offset: 2518, line: 40, column: 1 }, end: { offset: 2521, line: 40, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2518, line: 40, column: 1 },
														end: { offset: 2521, line: 40, column: 4 },
													},
													value: "The Schrödinger equation is a fundamental equation in quantum mechanics that describes the time evolution of a quantum system. It is given by:",
													key: "Yidm7aEZ0Q",
												},
											],
											key: "qNig7caaAL",
										},
										{
											type: "math",
											value: "i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = \\hat{H} \\Psi(\\mathbf{r}, t)",
											position: { start: { offset: 2664, line: 42, column: 1 }, end: { offset: 2756, line: 44, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>i</mi><mi mathvariant="normal">ℏ</mi><mfrac><mi mathvariant="normal">∂</mi><mrow><mi mathvariant="normal">∂</mi><mi>t</mi></mrow></mfrac><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mover accent="true"><mi>H</mi><mo>^</mo></mover><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = \\hat{H} \\Psi(\\mathbf{r}, t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0574em;vertical-align:-0.686em;"></span><span class="mord mathnormal">i</span><span class="mord">ℏ</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">t</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1968em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span></span>',
											enumerator: "1",
											key: "fASOkLD01f",
										},
										{
											type: "paragraph",
											position: { start: { offset: 2760, line: 46, column: 1 }, end: { offset: 2765, line: 46, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2760, line: 46, column: 1 },
														end: { offset: 2765, line: 46, column: 6 },
													},
													value: "where ",
													key: "mtP9XjWILy",
												},
												{
													type: "inlineMath",
													value: "\\Psi(\\mathbf{r}, t)",
													position: {
														start: { offset: 2766, line: 46, column: 7 },
														end: { offset: 2787, line: 46, column: 28 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\Psi(\\mathbf{r}, t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>',
													key: "Cg5341cIc5",
												},
												{
													type: "text",
													position: {
														start: { offset: 2787, line: 46, column: 28 },
														end: { offset: 2788, line: 46, column: 29 },
													},
													value: " is the wavefunction of the system, ",
													key: "NqD6SfWqrZ",
												},
												{
													type: "inlineMath",
													value: "\\hat{H}",
													position: {
														start: { offset: 2823, line: 46, column: 64 },
														end: { offset: 2832, line: 46, column: 73 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>H</mi><mo>^</mo></mover></mrow><annotation encoding="application/x-tex">\\hat{H}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9468em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span></span></span></span>',
													key: "oi4667MpnJ",
												},
												{
													type: "text",
													position: {
														start: { offset: 2832, line: 46, column: 73 },
														end: { offset: 2833, line: 46, column: 74 },
													},
													value: " is the Hamiltonian operator, ",
													key: "UskMCLbJvO",
												},
												{
													type: "inlineMath",
													value: "i",
													position: {
														start: { offset: 2862, line: 46, column: 103 },
														end: { offset: 2865, line: 46, column: 106 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>',
													key: "Bpi5EmYVd5",
												},
												{
													type: "text",
													position: {
														start: { offset: 2865, line: 46, column: 106 },
														end: { offset: 2866, line: 46, column: 107 },
													},
													value: " is the imaginary unit, and ",
													key: "w1HEsTwIKm",
												},
												{
													type: "inlineMath",
													value: "\\hbar",
													position: {
														start: { offset: 2893, line: 46, column: 134 },
														end: { offset: 2900, line: 46, column: 141 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">ℏ</mi></mrow><annotation encoding="application/x-tex">\\hbar</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord">ℏ</span></span></span></span>',
													key: "z6ERH8CmLJ",
												},
												{
													type: "text",
													position: {
														start: { offset: 2900, line: 46, column: 141 },
														end: { offset: 2901, line: 46, column: 142 },
													},
													value: " is the reduced Planck constant.",
													key: "yxtJXAcnbf",
												},
											],
											key: "akshpTUgMH",
										},
										{
											type: "heading",
											position: { start: { offset: 2936, line: 48, column: 1 }, end: { offset: 2947, line: 48, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2948, line: 48, column: 13 },
														end: { offset: 2952, line: 48, column: 17 },
													},
													value: "Time-Independent Schrödinger Equation",
													key: "hMC7GfIvQU",
												},
											],
											identifier: "time-independent-schr-dinger-equation",
											label: "Time-Independent Schrödinger Equation",
											html_id: "time-independent-schr-dinger-equation",
											implicit: true,
											key: "y3MMXbdtTl",
										},
										{
											type: "paragraph",
											position: { start: { offset: 2988, line: 49, column: 1 }, end: { offset: 2991, line: 49, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 2988, line: 49, column: 1 },
														end: { offset: 2991, line: 49, column: 4 },
													},
													value: "For stationary states, where the wavefunction does not depend on time, the Schrödinger equation simplifies to the time-independent Schrödinger equation:",
													key: "QU7Xi42pMW",
												},
											],
											key: "MNGaEMbnSb",
										},
										{
											type: "math",
											value: "\\hat{H} \\psi(\\mathbf{r}) = E \\psi(\\mathbf{r})",
											position: { start: { offset: 3144, line: 51, column: 1 }, end: { offset: 3197, line: 53, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>H</mi><mo>^</mo></mover><mi>ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo stretchy="false">)</mo><mo>=</mo><mi>E</mi><mi>ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\hat{H} \\psi(\\mathbf{r}) = E \\psi(\\mathbf{r})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1968em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mclose">)</span></span></span></span></span>',
											enumerator: "2",
											key: "tCNZTzbWGB",
										},
										{
											type: "paragraph",
											position: { start: { offset: 3201, line: 55, column: 1 }, end: { offset: 3206, line: 55, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3201, line: 55, column: 1 },
														end: { offset: 3206, line: 55, column: 6 },
													},
													value: "where ",
													key: "GOazS22zUC",
												},
												{
													type: "inlineMath",
													value: "\\psi(\\mathbf{r})",
													position: {
														start: { offset: 3207, line: 55, column: 7 },
														end: { offset: 3225, line: 55, column: 25 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\psi(\\mathbf{r})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mclose">)</span></span></span></span>',
													key: "s8TdW54qHS",
												},
												{
													type: "text",
													position: {
														start: { offset: 3225, line: 55, column: 25 },
														end: { offset: 3226, line: 55, column: 26 },
													},
													value: " is the stationary wavefunction and ",
													key: "koiUhebh15",
												},
												{
													type: "inlineMath",
													value: "E",
													position: {
														start: { offset: 3261, line: 55, column: 61 },
														end: { offset: 3264, line: 55, column: 64 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi></mrow><annotation encoding="application/x-tex">E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span>',
													key: "lNbiHAyyXM",
												},
												{
													type: "text",
													position: {
														start: { offset: 3264, line: 55, column: 64 },
														end: { offset: 3265, line: 55, column: 65 },
													},
													value: " is the energy of the system.",
													key: "OsyUW4vYFF",
												},
											],
											key: "J0eFuDHpgc",
										},
										{
											type: "heading",
											position: { start: { offset: 3297, line: 57, column: 1 }, end: { offset: 3308, line: 57, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3309, line: 57, column: 13 },
														end: { offset: 3319, line: 57, column: 23 },
													},
													value: "Heisenberg Uncertainty Principle",
													key: "YADlv8pcm8",
												},
											],
											identifier: "heisenberg-uncertainty-principle",
											label: "Heisenberg Uncertainty Principle",
											html_id: "heisenberg-uncertainty-principle",
											implicit: true,
											key: "pYMrRNUqKe",
										},
										{
											type: "paragraph",
											position: { start: { offset: 3344, line: 58, column: 1 }, end: { offset: 3347, line: 58, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3344, line: 58, column: 1 },
														end: { offset: 3347, line: 58, column: 4 },
													},
													value: "The Heisenberg uncertainty principle states that there is a fundamental limit to the precision with which certain pairs of physical properties can be simultaneously known. Mathematically, it is expressed as:",
													key: "pnhh9KG6ow",
												},
											],
											key: "gEntZwKwNW",
										},
										{
											type: "math",
											value: "\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}",
											position: { start: { offset: 3555, line: 60, column: 1 }, end: { offset: 3601, line: 62, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>x</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi mathvariant="normal">ℏ</mi><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">\\Delta x \\Delta p \\geq \\frac{\\hbar}{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord">Δ</span><span class="mord mathnormal">x</span><span class="mord">Δ</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0519em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3659em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">ℏ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>',
											enumerator: "3",
											key: "lharyFabpX",
										},
										{
											type: "paragraph",
											position: { start: { offset: 3605, line: 64, column: 1 }, end: { offset: 3610, line: 64, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3605, line: 64, column: 1 },
														end: { offset: 3610, line: 64, column: 6 },
													},
													value: "where ",
													key: "OsPemGzO7G",
												},
												{
													type: "inlineMath",
													value: "\\Delta x",
													position: {
														start: { offset: 3611, line: 64, column: 7 },
														end: { offset: 3621, line: 64, column: 17 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>x</mi></mrow><annotation encoding="application/x-tex">\\Delta x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span><span class="mord mathnormal">x</span></span></span></span>',
													key: "WQCiGwMxLl",
												},
												{
													type: "text",
													position: {
														start: { offset: 3621, line: 64, column: 17 },
														end: { offset: 3622, line: 64, column: 18 },
													},
													value: " is the uncertainty in position and ",
													key: "JSxOegyKKV",
												},
												{
													type: "inlineMath",
													value: "\\Delta p",
													position: {
														start: { offset: 3657, line: 64, column: 53 },
														end: { offset: 3667, line: 64, column: 63 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><annotation encoding="application/x-tex">\\Delta p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord">Δ</span><span class="mord mathnormal">p</span></span></span></span>',
													key: "usD7PCXVWH",
												},
												{
													type: "text",
													position: {
														start: { offset: 3667, line: 64, column: 63 },
														end: { offset: 3668, line: 64, column: 64 },
													},
													value: " is the uncertainty in momentum.",
													key: "WR2uUFdquj",
												},
											],
											key: "tUkhUoutNA",
										},
										{
											type: "heading",
											position: { start: { offset: 3703, line: 66, column: 1 }, end: { offset: 3714, line: 66, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3715, line: 66, column: 13 },
														end: { offset: 3720, line: 66, column: 18 },
													},
													value: "Pauli Exclusion Principle",
													key: "W8EHMsCk04",
												},
											],
											identifier: "pauli-exclusion-principle",
											label: "Pauli Exclusion Principle",
											html_id: "pauli-exclusion-principle",
											implicit: true,
											key: "dUxrlJMZdp",
										},
										{
											type: "paragraph",
											position: { start: { offset: 3743, line: 67, column: 1 }, end: { offset: 3746, line: 67, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3743, line: 67, column: 1 },
														end: { offset: 3746, line: 67, column: 4 },
													},
													value: "The Pauli exclusion principle states that no two identical fermions can occupy the same quantum state simultaneously. This principle is responsible for the stability of matter and the formation of electron shells in atoms.",
													key: "dV9zBgVxf3",
												},
											],
											key: "VX5pAbStMW",
										},
										{
											type: "heading",
											position: { start: { offset: 3969, line: 69, column: 1 }, end: { offset: 3980, line: 69, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 3981, line: 69, column: 13 },
														end: { offset: 3988, line: 69, column: 20 },
													},
													value: "Quantum Entanglement",
													key: "HTapc6YLWt",
												},
											],
											identifier: "quantum-entanglement",
											label: "Quantum Entanglement",
											html_id: "quantum-entanglement",
											implicit: true,
											key: "rczbXRABQJ",
										},
										{
											type: "paragraph",
											position: { start: { offset: 4004, line: 70, column: 1 }, end: { offset: 4011, line: 70, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4004, line: 70, column: 1 },
														end: { offset: 4011, line: 70, column: 8 },
													},
													value: "Quantum entanglement is a phenomenon in which two or more particles become correlated in such a way that the state of one particle is dependent on the state of the other(s), regardless of the distance between them. This phenomenon is a key aspect of quantum information and quantum computing.",
													key: "K1FvXLvG4b",
												},
											],
											key: "LRwHCoCe2L",
										},
										{
											type: "heading",
											position: { start: { offset: 4300, line: 72, column: 1 }, end: { offset: 4311, line: 72, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4312, line: 72, column: 13 },
														end: { offset: 4316, line: 72, column: 17 },
													},
													value: "Time-Dependent Schrödinger Equation",
													key: "BO9kO70oce",
												},
											],
											identifier: "time-dependent-schr-dinger-equation",
											label: "Time-Dependent Schrödinger Equation",
											html_id: "time-dependent-schr-dinger-equation",
											implicit: true,
											key: "KKSVTLvFRH",
										},
										{
											type: "paragraph",
											position: { start: { offset: 4350, line: 73, column: 1 }, end: { offset: 4353, line: 73, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4350, line: 73, column: 1 },
														end: { offset: 4353, line: 73, column: 4 },
													},
													value: "The time-dependent Schrödinger equation describes the time evolution of a quantum system. It is given by:",
													key: "t0t7e6PQSy",
												},
											],
											key: "j5HoQKpdRc",
										},
										{
											type: "math",
											value: "i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = \\hat{H} \\Psi(\\mathbf{r}, t)",
											position: { start: { offset: 4459, line: 75, column: 1 }, end: { offset: 4551, line: 77, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>i</mi><mi mathvariant="normal">ℏ</mi><mfrac><mi mathvariant="normal">∂</mi><mrow><mi mathvariant="normal">∂</mi><mi>t</mi></mrow></mfrac><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mover accent="true"><mi>H</mi><mo>^</mo></mover><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = \\hat{H} \\Psi(\\mathbf{r}, t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0574em;vertical-align:-0.686em;"></span><span class="mord mathnormal">i</span><span class="mord">ℏ</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">t</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1968em;vertical-align:-0.25em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span></span>',
											enumerator: "4",
											key: "lPqZj3vh1a",
										},
										{
											type: "paragraph",
											position: { start: { offset: 4555, line: 79, column: 1 }, end: { offset: 4560, line: 79, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4555, line: 79, column: 1 },
														end: { offset: 4560, line: 79, column: 6 },
													},
													value: "where ",
													key: "HuU2fOuhV7",
												},
												{
													type: "inlineMath",
													value: "\\Psi(\\mathbf{r}, t)",
													position: {
														start: { offset: 4561, line: 79, column: 7 },
														end: { offset: 4582, line: 79, column: 28 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ψ</mi><mo stretchy="false">(</mo><mi mathvariant="bold">r</mi><mo separator="true">,</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\Psi(\\mathbf{r}, t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">Ψ</span><span class="mopen">(</span><span class="mord mathbf">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>',
													key: "mBdSwB5Ed9",
												},
												{
													type: "text",
													position: {
														start: { offset: 4582, line: 79, column: 28 },
														end: { offset: 4583, line: 79, column: 29 },
													},
													value: " is the wavefunction of the system, ",
													key: "FxHnwgC9sz",
												},
												{
													type: "inlineMath",
													value: "\\hat{H}",
													position: {
														start: { offset: 4618, line: 79, column: 64 },
														end: { offset: 4627, line: 79, column: 73 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>H</mi><mo>^</mo></mover></mrow><annotation encoding="application/x-tex">\\hat{H}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9468em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span></span></span></span>',
													key: "CTbiTrNf2c",
												},
												{
													type: "text",
													position: {
														start: { offset: 4627, line: 79, column: 73 },
														end: { offset: 4628, line: 79, column: 74 },
													},
													value: " is the Hamiltonian operator, ",
													key: "wvh6uaPucG",
												},
												{
													type: "inlineMath",
													value: "i",
													position: {
														start: { offset: 4657, line: 79, column: 103 },
														end: { offset: 4660, line: 79, column: 106 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>',
													key: "FBL4dSKacn",
												},
												{
													type: "text",
													position: {
														start: { offset: 4660, line: 79, column: 106 },
														end: { offset: 4661, line: 79, column: 107 },
													},
													value: " is the imaginary unit, and ",
													key: "BDrb1erttb",
												},
												{
													type: "inlineMath",
													value: "\\hbar",
													position: {
														start: { offset: 4688, line: 79, column: 134 },
														end: { offset: 4695, line: 79, column: 141 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">ℏ</mi></mrow><annotation encoding="application/x-tex">\\hbar</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord">ℏ</span></span></span></span>',
													key: "ZyCgGVQDjF",
												},
												{
													type: "text",
													position: {
														start: { offset: 4695, line: 79, column: 141 },
														end: { offset: 4696, line: 79, column: 142 },
													},
													value: " is the reduced Planck constant.",
													key: "A5XXe9St5c",
												},
											],
											key: "FL72fyVAN0",
										},
										{
											type: "heading",
											position: { start: { offset: 4731, line: 81, column: 1 }, end: { offset: 4742, line: 81, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4743, line: 81, column: 13 },
														end: { offset: 4748, line: 81, column: 18 },
													},
													value: "Dirac Equation",
													key: "GLN0q8zLJt",
												},
											],
											identifier: "dirac-equation",
											label: "Dirac Equation",
											html_id: "dirac-equation",
											implicit: true,
											key: "v3aeWW3tMx",
										},
										{
											type: "paragraph",
											position: { start: { offset: 4760, line: 82, column: 1 }, end: { offset: 4763, line: 82, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4760, line: 82, column: 1 },
														end: { offset: 4763, line: 82, column: 4 },
													},
													value: "The Dirac equation is a relativistic wave equation that describes the behavior of fermions, such as electrons. It is given by:",
													key: "teQ55fTLNX",
												},
											],
											key: "A3oRHTCRvk",
										},
										{
											type: "math",
											value: "(i\\gamma^\\mu \\partial_\\mu - m)\\psi = 0",
											position: { start: { offset: 4890, line: 84, column: 1 }, end: { offset: 4936, line: 86, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>i</mi><msup><mi>γ</mi><mi>μ</mi></msup><msub><mi mathvariant="normal">∂</mi><mi>μ</mi></msub><mo>−</mo><mi>m</mi><mo stretchy="false">)</mo><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">(i\\gamma^\\mu \\partial_\\mu - m)\\psi = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">μ</span></span></span></span></span></span></span></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0556em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">μ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">m</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></span>',
											enumerator: "5",
											key: "GgHoj3Dnly",
										},
										{
											type: "paragraph",
											position: { start: { offset: 4940, line: 88, column: 1 }, end: { offset: 4945, line: 88, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 4940, line: 88, column: 1 },
														end: { offset: 4945, line: 88, column: 6 },
													},
													value: "where ",
													key: "EtZ6zHTizY",
												},
												{
													type: "inlineMath",
													value: "\\gamma^\\mu",
													position: {
														start: { offset: 4946, line: 88, column: 7 },
														end: { offset: 4958, line: 88, column: 19 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>γ</mi><mi>μ</mi></msup></mrow><annotation encoding="application/x-tex">\\gamma^\\mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8588em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">μ</span></span></span></span></span></span></span></span></span></span></span>',
													key: "ZTwXB9gGCP",
												},
												{
													type: "text",
													position: {
														start: { offset: 4958, line: 88, column: 19 },
														end: { offset: 4959, line: 88, column: 20 },
													},
													value: " are the Dirac gamma matrices, ",
													key: "pQCA2WqSTa",
												},
												{
													type: "inlineMath",
													value: "\\partial_\\mu",
													position: {
														start: { offset: 4989, line: 88, column: 50 },
														end: { offset: 5003, line: 88, column: 64 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi mathvariant="normal">∂</mi><mi>μ</mi></msub></mrow><annotation encoding="application/x-tex">\\partial_\\mu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9805em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0556em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">μ</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>',
													key: "uEeGbBScll",
												},
												{
													type: "text",
													position: {
														start: { offset: 5003, line: 88, column: 64 },
														end: { offset: 5004, line: 88, column: 65 },
													},
													value: " is the four-gradient operator, ",
													key: "HfofEZRh2I",
												},
												{
													type: "inlineMath",
													value: "m",
													position: {
														start: { offset: 5035, line: 88, column: 96 },
														end: { offset: 5038, line: 88, column: 99 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span>',
													key: "PxkroodXVm",
												},
												{
													type: "text",
													position: {
														start: { offset: 5038, line: 88, column: 99 },
														end: { offset: 5039, line: 88, column: 100 },
													},
													value: " is the mass of the particle, and ",
													key: "D4uFAtrgiy",
												},
												{
													type: "text",
													value: "ψ",
													position: {
														start: { offset: 5072, line: 88, column: 133 },
														end: { offset: 5078, line: 88, column: 139 },
													},
													key: "w5G9hEFVWv",
												},
												{
													type: "text",
													position: {
														start: { offset: 5078, line: 88, column: 139 },
														end: { offset: 5079, line: 88, column: 140 },
													},
													value: " is the wavefunction.",
													key: "QPZJGAMz7s",
												},
											],
											key: "xyStqxTj4g",
										},
										{
											type: "heading",
											position: { start: { offset: 5103, line: 90, column: 1 }, end: { offset: 5114, line: 90, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5115, line: 90, column: 13 },
														end: { offset: 5122, line: 90, column: 20 },
													},
													value: "Quantum Field Theory",
													key: "rDNq1NAkhD",
												},
											],
											identifier: "quantum-field-theory",
											label: "Quantum Field Theory",
											html_id: "quantum-field-theory",
											implicit: true,
											key: "twAznDZdAi",
										},
										{
											type: "paragraph",
											position: { start: { offset: 5138, line: 91, column: 1 }, end: { offset: 5145, line: 91, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5138, line: 91, column: 1 },
														end: { offset: 5145, line: 91, column: 8 },
													},
													value: "Quantum field theory is a framework that combines quantum mechanics and special relativity to describe the behavior of particles and fields. It is based on the principles of quantization and the concept of fields as operators. The equations of quantum field theory include the Klein-Gordon equation, the Dirac equation, and the Yang-Mills equations.",
													key: "uDnSi3caGt",
												},
											],
											key: "QsN122QY7o",
										},
										{
											type: "heading",
											position: { start: { offset: 5491, line: 93, column: 1 }, end: { offset: 5502, line: 93, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5503, line: 93, column: 13 },
														end: { offset: 5510, line: 93, column: 20 },
													},
													value: "Quantum Electrodynamics",
													key: "zz1OQQI28A",
												},
											],
											identifier: "quantum-electrodynamics",
											label: "Quantum Electrodynamics",
											html_id: "quantum-electrodynamics",
											implicit: true,
											key: "MTzGfuJRhb",
										},
										{
											type: "paragraph",
											position: { start: { offset: 5529, line: 94, column: 1 }, end: { offset: 5536, line: 94, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5529, line: 94, column: 1 },
														end: { offset: 5536, line: 94, column: 8 },
													},
													value: "Quantum electrodynamics (QED) is a quantum field theory that describes the electromagnetic interaction between charged particles. It is based on the principles of quantum mechanics and special relativity. The equations of QED include the Dirac equation for electrons, the Maxwell’s equations for the electromagnetic field, and the Feynman rules for calculating scattering amplitudes.",
													key: "cl25Pt1c75",
												},
											],
											key: "ItCnRo4dtt",
										},
										{
											type: "heading",
											position: { start: { offset: 5916, line: 96, column: 1 }, end: { offset: 5927, line: 96, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5928, line: 96, column: 13 },
														end: { offset: 5935, line: 96, column: 20 },
													},
													value: "Quantum Chromodynamics",
													key: "biXADWpbYn",
												},
											],
											identifier: "quantum-chromodynamics",
											label: "Quantum Chromodynamics",
											html_id: "quantum-chromodynamics",
											implicit: true,
											key: "Lg62sLDbwy",
										},
										{
											type: "paragraph",
											position: { start: { offset: 5953, line: 97, column: 1 }, end: { offset: 5960, line: 97, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 5953, line: 97, column: 1 },
														end: { offset: 5960, line: 97, column: 8 },
													},
													value: "Quantum chromodynamics (QCD) is a quantum field theory that describes the strong interaction between quarks and gluons. It is based on the principles of quantum mechanics and special relativity. The equations of QCD include the Dirac equation for quarks, the Yang-Mills equations for the gluon field, and the Feynman rules for calculating scattering amplitudes.",
													key: "fUv6mlLtCE",
												},
											],
											key: "Y8NN47sGvP",
										},
										{
											type: "heading",
											position: { start: { offset: 6318, line: 99, column: 1 }, end: { offset: 6329, line: 99, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 6330, line: 99, column: 13 },
														end: { offset: 6337, line: 99, column: 20 },
													},
													value: "Quantum Gravity",
													key: "vgFu0vDXd5",
												},
											],
											identifier: "quantum-gravity",
											label: "Quantum Gravity",
											html_id: "quantum-gravity",
											implicit: true,
											key: "NDFkMLkmhX",
										},
										{
											type: "paragraph",
											position: { start: { offset: 6348, line: 100, column: 1 }, end: { offset: 6355, line: 100, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 6348, line: 100, column: 1 },
														end: { offset: 6355, line: 100, column: 8 },
													},
													value: "Quantum gravity is a theoretical framework that aims to describe the gravitational interaction in the framework of quantum mechanics. It is based on the principles of general relativity and quantum field theory. The equations of quantum gravity are still under active research and include the Wheeler-DeWitt equation and various approaches such as string theory and loop quantum gravity.",
													key: "fjwWPmD4zF",
												},
											],
											key: "tY6GQ6gN9U",
										},
										{
											type: "heading",
											position: { start: { offset: 6739, line: 102, column: 1 }, end: { offset: 6750, line: 102, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 6751, line: 102, column: 13 },
														end: { offset: 6758, line: 102, column: 20 },
													},
													value: "Wheeler-DeWitt Equation",
													key: "dkDLXJlnF6",
												},
											],
											identifier: "wheeler-dewitt-equation",
											label: "Wheeler-DeWitt Equation",
											html_id: "wheeler-dewitt-equation",
											implicit: true,
											key: "X5xNU7chSl",
										},
										{
											type: "paragraph",
											position: { start: { offset: 6777, line: 103, column: 1 }, end: { offset: 6780, line: 103, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 6777, line: 103, column: 1 },
														end: { offset: 6780, line: 103, column: 4 },
													},
													value: "The Wheeler-DeWitt equation is a key equation in quantum gravity that attempts to describe the quantum state of the entire universe. It is a constraint equation that arises from the quantization of general relativity.",
													key: "wDl4yMOjTS",
												},
											],
											key: "fyVHhzsLY3",
										},
										{
											type: "math",
											value: "\\hat{H} \\Psi[g_{\\mu\\nu}] = 0",
											position: { start: { offset: 6998, line: 105, column: 1 }, end: { offset: 7034, line: 107, column: 3 } },
											html: '<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>H</mi><mo>^</mo></mover><mi mathvariant="normal">Ψ</mi><mo stretchy="false">[</mo><msub><mi>g</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msub><mo stretchy="false">]</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\hat{H} \\Psi[g_{\\mu\\nu}] = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2329em;vertical-align:-0.2861em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span><span class="mord">Ψ</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.06366em;">μν</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></span>',
											enumerator: "6",
											key: "xGCH9VNN3u",
										},
										{
											type: "paragraph",
											position: { start: { offset: 7038, line: 109, column: 1 }, end: { offset: 7043, line: 109, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7038, line: 109, column: 1 },
														end: { offset: 7043, line: 109, column: 6 },
													},
													value: "where ",
													key: "Ttn4gwB6yN",
												},
												{
													type: "inlineMath",
													value: "\\Psi[g_{\\mu\\nu}]",
													position: {
														start: { offset: 7044, line: 109, column: 7 },
														end: { offset: 7062, line: 109, column: 25 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ψ</mi><mo stretchy="false">[</mo><msub><mi>g</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msub><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\Psi[g_{\\mu\\nu}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0361em;vertical-align:-0.2861em;"></span><span class="mord">Ψ</span><span class="mopen">[</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.06366em;">μν</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mclose">]</span></span></span></span>',
													key: "u0ikIpYl5n",
												},
												{
													type: "text",
													position: {
														start: { offset: 7062, line: 109, column: 25 },
														end: { offset: 7063, line: 109, column: 26 },
													},
													value: " is the wavefunction of the universe and ",
													key: "xvWSqxiM0Z",
												},
												{
													type: "inlineMath",
													value: "\\hat{H}",
													position: {
														start: { offset: 7103, line: 109, column: 66 },
														end: { offset: 7112, line: 109, column: 75 },
													},
													html: '<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>H</mi><mo>^</mo></mover></mrow><annotation encoding="application/x-tex">\\hat{H}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9468em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1944em;"><span class="mord">^</span></span></span></span></span></span></span></span></span></span>',
													key: "LgUNcuQPok",
												},
												{
													type: "text",
													position: {
														start: { offset: 7112, line: 109, column: 75 },
														end: { offset: 7113, line: 109, column: 76 },
													},
													value: " is the Wheeler-DeWitt operator.",
													key: "r1XNygOLgL",
												},
											],
											key: "njrwrCEYKo",
										},
										{
											type: "heading",
											position: { start: { offset: 7148, line: 111, column: 1 }, end: { offset: 7159, line: 111, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7160, line: 111, column: 13 },
														end: { offset: 7166, line: 111, column: 19 },
													},
													value: "String Theory",
													key: "LvOHhQ3s1i",
												},
											],
											identifier: "string-theory",
											label: "String Theory",
											html_id: "string-theory",
											implicit: true,
											key: "fN3z2XFKQ7",
										},
										{
											type: "paragraph",
											position: { start: { offset: 7176, line: 112, column: 1 }, end: { offset: 7182, line: 112, column: 7 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7176, line: 112, column: 1 },
														end: { offset: 7182, line: 112, column: 7 },
													},
													value: "String theory is a theoretical framework that attempts to unify quantum mechanics and general relativity. It describes elementary particles as tiny, vibrating strings. The equations of string theory involve the dynamics of these strings and their interactions.",
													key: "XYFvXcaNaR",
												},
											],
											key: "frvYFhi5bs",
										},
										{
											type: "heading",
											position: { start: { offset: 7440, line: 114, column: 1 }, end: { offset: 7451, line: 114, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7452, line: 114, column: 13 },
														end: { offset: 7456, line: 114, column: 17 },
													},
													value: "Loop Quantum Gravity",
													key: "vv7yo5H24b",
												},
											],
											identifier: "loop-quantum-gravity",
											label: "Loop Quantum Gravity",
											html_id: "loop-quantum-gravity",
											implicit: true,
											key: "LHfjcPZn0T",
										},
										{
											type: "paragraph",
											position: { start: { offset: 7475, line: 115, column: 1 }, end: { offset: 7479, line: 115, column: 5 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7475, line: 115, column: 1 },
														end: { offset: 7479, line: 115, column: 5 },
													},
													value: "Loop quantum gravity is another approach to quantum gravity that quantizes space itself. It represents space as a network of interconnected loops. The equations of loop quantum gravity involve the quantization of these loops and the dynamics of the resulting quantum spacetime.",
													key: "G8ixwTvzux",
												},
											],
											key: "Npl53iufFk",
										},
										{
											type: "heading",
											position: { start: { offset: 7756, line: 117, column: 1 }, end: { offset: 7767, line: 117, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7768, line: 117, column: 13 },
														end: { offset: 7773, line: 117, column: 18 },
													},
													value: "Black Hole Thermodynamics",
													key: "bLltn4P6CD",
												},
											],
											identifier: "black-hole-thermodynamics",
											label: "Black Hole Thermodynamics",
											html_id: "black-hole-thermodynamics",
											implicit: true,
											key: "bOt7hZNl0r",
										},
										{
											type: "paragraph",
											position: { start: { offset: 7796, line: 118, column: 1 }, end: { offset: 7801, line: 118, column: 6 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 7796, line: 118, column: 1 },
														end: { offset: 7801, line: 118, column: 6 },
													},
													value: "Black hole thermodynamics is a field that studies the thermodynamic properties of black holes. It combines concepts from general relativity and quantum mechanics. The equations of black hole thermodynamics include the laws of black hole mechanics and the Bekenstein-Hawking entropy formula.",
													key: "XlwgOunrXT",
												},
											],
											key: "r3JFQfw5gS",
										},
										{
											type: "heading",
											position: { start: { offset: 8090, line: 120, column: 1 }, end: { offset: 8101, line: 120, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8102, line: 120, column: 13 },
														end: { offset: 8110, line: 120, column: 21 },
													},
													value: "Emergent Gravity",
													key: "Yucb19Xq8i",
												},
											],
											identifier: "emergent-gravity",
											label: "Emergent Gravity",
											html_id: "emergent-gravity",
											implicit: true,
											key: "jrYXg1v4ti",
										},
										{
											type: "paragraph",
											position: { start: { offset: 8121, line: 121, column: 1 }, end: { offset: 8129, line: 121, column: 9 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8121, line: 121, column: 1 },
														end: { offset: 8129, line: 121, column: 9 },
													},
													value: "Emergent gravity is a concept that suggests that gravity is not a fundamental force, but rather emerges from the collective behavior of underlying microscopic degrees of freedom. The equations of emergent gravity describe how the macroscopic gravitational field arises from the microscopic constituents.",
													key: "wy5gdgERy6",
												},
											],
											key: "EhRLjBPPrb",
										},
										{
											type: "heading",
											position: { start: { offset: 8428, line: 123, column: 1 }, end: { offset: 8439, line: 123, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8440, line: 123, column: 13 },
														end: { offset: 8447, line: 123, column: 20 },
													},
													value: "Quantum Cosmology",
													key: "zM02lMSp8P",
												},
											],
											identifier: "quantum-cosmology",
											label: "Quantum Cosmology",
											html_id: "quantum-cosmology",
											implicit: true,
											key: "kQxYCCXb1p",
										},
										{
											type: "paragraph",
											position: { start: { offset: 8460, line: 124, column: 1 }, end: { offset: 8467, line: 124, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8460, line: 124, column: 1 },
														end: { offset: 8467, line: 124, column: 8 },
													},
													value: "Quantum cosmology is the application of quantum mechanics to the study of the universe as a whole. It aims to describe the quantum state of the universe and its evolution. The equations of quantum cosmology include the Wheeler-DeWitt equation and various models of the early universe.",
													key: "Kfq2UR7uAi",
												},
											],
											key: "pw8qKlvrjj",
										},
										{
											type: "heading",
											position: { start: { offset: 8748, line: 126, column: 1 }, end: { offset: 8759, line: 126, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8760, line: 126, column: 13 },
														end: { offset: 8767, line: 126, column: 20 },
													},
													value: "Quantum Foam",
													key: "ZE6DXN1zaI",
												},
											],
											identifier: "quantum-foam",
											label: "Quantum Foam",
											html_id: "quantum-foam",
											implicit: true,
											key: "iDDQcLwUM9",
										},
										{
											type: "paragraph",
											position: { start: { offset: 8775, line: 127, column: 1 }, end: { offset: 8782, line: 127, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 8775, line: 127, column: 1 },
														end: { offset: 8782, line: 127, column: 8 },
													},
													value: "Quantum foam is a concept that arises from the combination of quantum mechanics and general relativity. It suggests that at very small scales, spacetime is not smooth but rather fluctuates and foams. The equations of quantum foam describe the dynamics of these fluctuations and their effects on the structure of spacetime.",
													key: "uz1IiC0zDB",
												},
											],
											key: "SQNCw1qS9F",
										},
										{
											type: "heading",
											position: { start: { offset: 9101, line: 129, column: 1 }, end: { offset: 9112, line: 129, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9113, line: 129, column: 13 },
														end: { offset: 9120, line: 129, column: 20 },
													},
													value: "Quantum Gravity Phenomenology",
													key: "CR6dYWOKlt",
												},
											],
											identifier: "quantum-gravity-phenomenology",
											label: "Quantum Gravity Phenomenology",
											html_id: "quantum-gravity-phenomenology",
											implicit: true,
											key: "VEaNhbyZaL",
										},
										{
											type: "paragraph",
											position: { start: { offset: 9145, line: 130, column: 1 }, end: { offset: 9152, line: 130, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9145, line: 130, column: 1 },
														end: { offset: 9152, line: 130, column: 8 },
													},
													value: "Quantum gravity phenomenology is the study of possible experimental and observational consequences of quantum gravity. It aims to find ways to test and probe the effects of quantum gravity using current and future experiments. The equations of quantum gravity phenomenology involve the predictions and signatures of quantum gravity in various physical phenomena.",
													key: "y7eqjXthbM",
												},
											],
											key: "rm4WkOgAim",
										},
										{
											type: "heading",
											position: { start: { offset: 9511, line: 132, column: 1 }, end: { offset: 9522, line: 132, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9523, line: 132, column: 13 },
														end: { offset: 9530, line: 132, column: 20 },
													},
													value: "Quantum Gravity and the Holographic Principle",
													key: "yQ1qz907Ea",
												},
											],
											identifier: "quantum-gravity-and-the-holographic-principle",
											label: "Quantum Gravity and the Holographic Principle",
											html_id: "quantum-gravity-and-the-holographic-principle",
											implicit: true,
											key: "BGi1rKCCYC",
										},
										{
											type: "paragraph",
											position: { start: { offset: 9571, line: 133, column: 1 }, end: { offset: 9574, line: 133, column: 4 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9571, line: 133, column: 1 },
														end: { offset: 9574, line: 133, column: 4 },
													},
													value: "The holographic principle is a concept that suggests that the information content of a region of spacetime is encoded on its boundary. It has deep connections to quantum gravity and the nature of spacetime. The equations of the holographic principle involve the relationship between the bulk and boundary descriptions of a quantum gravitational system.",
													key: "dOVLx6jbxI",
												},
											],
											key: "A1mWMpUyoc",
										},
										{
											type: "heading",
											position: { start: { offset: 9927, line: 135, column: 1 }, end: { offset: 9938, line: 135, column: 12 } },
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9939, line: 135, column: 13 },
														end: { offset: 9946, line: 135, column: 20 },
													},
													value: "Quantum Gravity and Black Holes",
													key: "RKFKLEiFSa",
												},
											],
											identifier: "quantum-gravity-and-black-holes",
											label: "Quantum Gravity and Black Holes",
											html_id: "quantum-gravity-and-black-holes",
											implicit: true,
											key: "vqbGN7W2WU",
										},
										{
											type: "paragraph",
											position: { start: { offset: 9973, line: 136, column: 1 }, end: { offset: 9980, line: 136, column: 8 } },
											children: [
												{
													type: "text",
													position: {
														start: { offset: 9973, line: 136, column: 1 },
														end: { offset: 9980, line: 136, column: 8 },
													},
													value: "Quantum gravity provides insights into the behavior of black holes, including their formation, evaporation, and information loss paradox. The equations of quantum gravity help explain the microscopic structure of black holes and their thermodynamic properties.",
													key: "msEeF8oYo5",
												},
											],
											key: "c86BHSrKhF",
										},
										{
											type: "heading",
											position: {
												start: { offset: 10237, line: 138, column: 1 },
												end: { offset: 10248, line: 138, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10249, line: 138, column: 13 },
														end: { offset: 10256, line: 138, column: 20 },
													},
													value: "Quantum Gravity and Cosmology",
													key: "fmXqe5RhWU",
												},
											],
											identifier: "quantum-gravity-and-cosmology",
											label: "Quantum Gravity and Cosmology",
											html_id: "quantum-gravity-and-cosmology",
											implicit: true,
											key: "fKhllQBWt4",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 10281, line: 139, column: 1 },
												end: { offset: 10288, line: 139, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10281, line: 139, column: 1 },
														end: { offset: 10288, line: 139, column: 8 },
													},
													value: "Quantum gravity plays a crucial role in understanding the early universe, the Big Bang, and the inflationary period. The equations of quantum gravity provide insights into the origin and evolution of the universe on a cosmological scale.",
													key: "mgNwrIIkmA",
												},
											],
											key: "NCDdYnReFQ",
										},
										{
											type: "heading",
											position: {
												start: { offset: 10522, line: 141, column: 1 },
												end: { offset: 10533, line: 141, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10534, line: 141, column: 13 },
														end: { offset: 10541, line: 141, column: 20 },
													},
													value: "Quantum Gravity and Singularities",
													key: "ooIDt6J5nO",
												},
											],
											identifier: "quantum-gravity-and-singularities",
											label: "Quantum Gravity and Singularities",
											html_id: "quantum-gravity-and-singularities",
											implicit: true,
											key: "QLc1TWxygn",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 10570, line: 142, column: 1 },
												end: { offset: 10577, line: 142, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10570, line: 142, column: 1 },
														end: { offset: 10577, line: 142, column: 8 },
													},
													value: "Quantum gravity addresses the issue of singularities, such as those found in black holes and the Big Bang. The equations of quantum gravity help resolve the infinities associated with singularities and provide a more complete description of these phenomena.",
													key: "h1R3LBF7O0",
												},
											],
											key: "ZswfcPHUTS",
										},
										{
											type: "heading",
											position: {
												start: { offset: 10831, line: 144, column: 1 },
												end: { offset: 10842, line: 144, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10843, line: 144, column: 13 },
														end: { offset: 10850, line: 144, column: 20 },
													},
													value: "Quantum Gravity and the Nature of Spacetime",
													key: "x6i7aUUOCO",
												},
											],
											identifier: "quantum-gravity-and-the-nature-of-spacetime",
											label: "Quantum Gravity and the Nature of Spacetime",
											html_id: "quantum-gravity-and-the-nature-of-spacetime",
											implicit: true,
											key: "SJ0O5aexCX",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 10889, line: 145, column: 1 },
												end: { offset: 10896, line: 145, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 10889, line: 145, column: 1 },
														end: { offset: 10896, line: 145, column: 8 },
													},
													value: "Quantum gravity explores the fundamental nature of spacetime and its quantization. The equations of quantum gravity describe the dynamics of spacetime at the smallest scales and provide insights into the nature of geometry and topology.",
													key: "sBrrZdNdUj",
												},
											],
											key: "se5pC7Qu4v",
										},
										{
											type: "heading",
											position: {
												start: { offset: 11129, line: 147, column: 1 },
												end: { offset: 11140, line: 147, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11141, line: 147, column: 13 },
														end: { offset: 11148, line: 147, column: 20 },
													},
													value: "Quantum Gravity and the Multiverse",
													key: "ZvMbkwhsDu",
												},
											],
											identifier: "quantum-gravity-and-the-multiverse",
											label: "Quantum Gravity and the Multiverse",
											html_id: "quantum-gravity-and-the-multiverse",
											implicit: true,
											key: "TKwKggOn7e",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 11178, line: 148, column: 1 },
												end: { offset: 11185, line: 148, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11178, line: 148, column: 1 },
														end: { offset: 11185, line: 148, column: 8 },
													},
													value: "Quantum gravity theories, such as string theory and loop quantum gravity, offer possibilities for a multiverse, where multiple universes coexist. The equations of quantum gravity help explore the existence and properties of these parallel universes.",
													key: "DUBVhpeLlv",
												},
											],
											key: "qXSebTUngq",
										},
										{
											type: "heading",
											position: {
												start: { offset: 11431, line: 150, column: 1 },
												end: { offset: 11442, line: 150, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11443, line: 150, column: 13 },
														end: { offset: 11450, line: 150, column: 20 },
													},
													value: "Quantum Gravity and the Arrow of Time",
													key: "DrKs1mpgJ8",
												},
											],
											identifier: "quantum-gravity-and-the-arrow-of-time",
											label: "Quantum Gravity and the Arrow of Time",
											html_id: "quantum-gravity-and-the-arrow-of-time",
											implicit: true,
											key: "KtT8YCLvxN",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 11483, line: 151, column: 1 },
												end: { offset: 11490, line: 151, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11483, line: 151, column: 1 },
														end: { offset: 11490, line: 151, column: 8 },
													},
													value: "Quantum gravity investigates the origin and nature of the arrow of time, which determines the directionality of cause and effect. The equations of quantum gravity provide insights into the fundamental laws that govern the flow of time.",
													key: "ccaDs7RspM",
												},
											],
											key: "NaFnhT7vwt",
										},
										{
											type: "heading",
											position: {
												start: { offset: 11722, line: 153, column: 1 },
												end: { offset: 11733, line: 153, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11734, line: 153, column: 13 },
														end: { offset: 11741, line: 153, column: 20 },
													},
													value: "Quantum Gravity and Quantum Information",
													key: "A5LzuUrst5",
												},
											],
											identifier: "quantum-gravity-and-quantum-information",
											label: "Quantum Gravity and Quantum Information",
											html_id: "quantum-gravity-and-quantum-information",
											implicit: true,
											key: "FUnavzVz2Z",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 11776, line: 154, column: 1 },
												end: { offset: 11783, line: 154, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 11776, line: 154, column: 1 },
														end: { offset: 11783, line: 154, column: 8 },
													},
													value: "Quantum gravity has connections to quantum information theory, which studies the fundamental limits and possibilities of information processing. The equations of quantum gravity help explore the role of information in the fabric of spacetime.",
													key: "y3ACuIDQiO",
												},
											],
											key: "ABJlAPuere",
										},
										{
											type: "heading",
											position: {
												start: { offset: 12022, line: 156, column: 1 },
												end: { offset: 12033, line: 156, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12034, line: 156, column: 13 },
														end: { offset: 12041, line: 156, column: 20 },
													},
													value: "Quantum Gravity and the Foundations of Quantum Mechanics",
													key: "XIzhsh4pBX",
												},
											],
											identifier: "quantum-gravity-and-the-foundations-of-quantum-mechanics",
											label: "Quantum Gravity and the Foundations of Quantum Mechanics",
											html_id: "quantum-gravity-and-the-foundations-of-quantum-mechanics",
											implicit: true,
											key: "ggSHDxlk3F",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 12093, line: 157, column: 1 },
												end: { offset: 12100, line: 157, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12093, line: 157, column: 1 },
														end: { offset: 12100, line: 157, column: 8 },
													},
													value: "Quantum gravity theories aim to reconcile the principles of quantum mechanics with those of general relativity. The equations of quantum gravity provide a framework for understanding the fundamental nature of quantum mechanics and its relationship to gravity.",
													key: "wlK05hsdGp",
												},
											],
											key: "F7Jm6GhoDg",
										},
										{
											type: "heading",
											position: {
												start: { offset: 12356, line: 159, column: 1 },
												end: { offset: 12367, line: 159, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12368, line: 159, column: 13 },
														end: { offset: 12375, line: 159, column: 20 },
													},
													value: "Quantum Gravity and Experimental Tests",
													key: "Gd3s7E82iu",
												},
											],
											identifier: "quantum-gravity-and-experimental-tests",
											label: "Quantum Gravity and Experimental Tests",
											html_id: "quantum-gravity-and-experimental-tests",
											implicit: true,
											key: "CLWlJ1wI74",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 12409, line: 160, column: 1 },
												end: { offset: 12416, line: 160, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12409, line: 160, column: 1 },
														end: { offset: 12416, line: 160, column: 8 },
													},
													value: "Quantum gravity theories make predictions that can be tested through experiments and observations. The equations of quantum gravity help formulate these predictions and guide the design of experiments to probe the quantum nature of gravity.",
													key: "HTUbXmiKy0",
												},
											],
											key: "CTuEB6LLdt",
										},
										{
											type: "heading",
											position: {
												start: { offset: 12653, line: 162, column: 1 },
												end: { offset: 12664, line: 162, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12665, line: 162, column: 13 },
														end: { offset: 12672, line: 162, column: 20 },
													},
													value: "Quantum Gravity and the Unification of Forces",
													key: "wObvGTI1NF",
												},
											],
											identifier: "quantum-gravity-and-the-unification-of-forces",
											label: "Quantum Gravity and the Unification of Forces",
											html_id: "quantum-gravity-and-the-unification-of-forces",
											implicit: true,
											key: "SEwxOxaeuN",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 12713, line: 163, column: 1 },
												end: { offset: 12720, line: 163, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12713, line: 163, column: 1 },
														end: { offset: 12720, line: 163, column: 8 },
													},
													value: "Quantum gravity seeks to unify the fundamental forces of nature, including gravity, electromagnetism, and the strong and weak nuclear forces. The equations of quantum gravity provide insights into the possibility of a unified theory that encompasses all known forces.",
													key: "idSg5ZSde9",
												},
											],
											key: "Qkuk5PdbjU",
										},
										{
											type: "heading",
											position: {
												start: { offset: 12984, line: 165, column: 1 },
												end: { offset: 12995, line: 165, column: 12 },
											},
											depth: 3,
											children: [
												{
													type: "text",
													position: {
														start: { offset: 12996, line: 165, column: 13 },
														end: { offset: 13003, line: 165, column: 20 },
													},
													value: "Quantum Gravity and the Nature of Matter",
													key: "HOoiEzGJMY",
												},
											],
											identifier: "quantum-gravity-and-the-nature-of-matter",
											label: "Quantum Gravity and the Nature of Matter",
											html_id: "quantum-gravity-and-the-nature-of-matter",
											implicit: true,
											key: "iuhSz7Eryt",
										},
										{
											type: "paragraph",
											position: {
												start: { offset: 13039, line: 166, column: 1 },
												end: { offset: 13046, line: 166, column: 8 },
											},
											children: [
												{
													type: "text",
													position: {
														start: { offset: 13039, line: 166, column: 1 },
														end: { offset: 13046, line: 166, column: 8 },
													},
													value: "Quantum gravity theories explore the nature of matter at the most fundamental level. The equations of quantum gravity help understand the behavior of elementary particles and their interactions in the context of a quantum gravitational framework.",
													key: "DtnLYFVann",
												},
											],
											key: "RY5zIkOXFd",
										},
									],
									key: "wVd9WRNShL",
								},
							],
							key: "rilcf6k19u",
						}}
					/>
					<Details title="Title" open>
						Some text
					</Details>
				</ThemeProvider>
			</section>
		</section>
	);
}

MySTComponent;
