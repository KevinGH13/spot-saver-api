export class CreateSpotDto {
  readonly name: string;
  readonly url: string;
  readonly location: string;
  readonly latitude: string;
  readonly longitude: string;
  readonly tags: string[];
}