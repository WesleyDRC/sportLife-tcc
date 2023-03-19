interface IUseCase {
  execute(data: unknown): Promise<unknown>;
}

export default IUseCase;
