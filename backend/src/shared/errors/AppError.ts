class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly metadata?: { [key: string]: string };

  constructor(
    message: string,
    statusCode = 400,
    metadata?: { [key: string]: string },
  ) {
    this.message = message;
    this.statusCode = statusCode;
    this.metadata = metadata;
  }
}

export default AppError;
