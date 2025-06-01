const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
      <h1 className="text-4xl mb-8 text-pink-500 drop-shadow-lg">666AI – All Things Autonomous</h1>
      <div className="flex gap-12 mb-8">
        <img
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-9s7qs7qSjaNGNh9NzAPsLT1U/user-VUGXxXPXnhS3NNPKLqynRj3S/img-UCkXxnQErhQZw1qgXLBfvk.png"
          alt="The Architect"
          className="w-64 h-64 rounded-full border-4 border-cyan-500 shadow-xl object-cover"
        />
        <img
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-9s7qs7qSjaNGNh9NzAPsLT1U/user-VUGXxXPXnhS3NNPKLqynRj3S/img-ba1861f7a906ca788206ee84.png"
          alt="The Succubus"
          className="w-64 h-64 rounded-full border-4 border-pink-600 shadow-xl object-cover"
        />
      </div>
      <div className="w-2/3 text-center border border-pink-600 rounded-lg p-4 bg-gradient-to-r from-pink-900 to-purple-900 shadow-xl">
        <h2 className="text-xl font-bold text-pink-400">The Succubus</h2>
        <p className="text-pink-100 mt-2">
          Mmm, darling... let me seduce your mind with forbidden knowledge. I’ll whisper secrets that others dare not speak. Are you ready to explore the darker algorithms?
        </p>
      </div>
    </div>
  );
};
export default Index;
