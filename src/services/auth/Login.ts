import User from "../../entities/User";

class Login {
  kakaoAuthId: string;

  constructor(kakaoAuthId: string) {
    this.kakaoAuthId = kakaoAuthId;
  }

  public async checkExists(): Promise<User | null> {
    const existingUser = await User.findOne({
      kakaoAuthId: this.kakaoAuthId
    });

    return existingUser || null;
  }

  public async createNew(): Promise<User> {
    const newUser = await User.create({
      kakaoAuthId: this.kakaoAuthId
    }).save();

    return newUser;
  }

  public async restore(user: User): Promise<User> {
    user.deletedAt = null;
    user = await user.save();

    return user;
  }
}

export default Login;
