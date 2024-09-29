import TiltWrapper from "./TiltWrapper";

export const Games = () => {
    return (
        <div className="py-12 bg-custom-dark m-0 p-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-custom-primary font-semibold tracking-wide uppercase">Games</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-custom-dark sm:text-4xl">
                    Some games to play
                </p>
            </div>

            <div className="mt-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="Ludo.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Ludo Fam, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="tictactoe.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Tic Tac Toe, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="Ludo.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Ludo Fam, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="Ludo.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Ludo Fam, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="tictactoe.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Tic Tac Toe, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                    <TiltWrapper options={{ max: 15, speed: 200 }}>
                        <a target="blank" href="https://ludo.nixarcade.fun/">
                            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-custom-dark">
                                    <img className="p-8 rounded-t-lg" src="Ludo.png" alt="product image" />
                                <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-custom-dark">Ludo Fam, play and win with your friends!!</h5>
                                </div>
                            </div>
                        </a>
                    </TiltWrapper>
                </div>
            </div>
            </div>
        </div>
    )
};