import { DynamicModule, Module } from '@nestjs/common';

/**
 * Example of dynamic module
 */

@Module({})
export class EventModule {
  static register(events: string[]): DynamicModule {
    return {
      module: EventModule,
      providers: [
        {
          provide: 'EVENTS',
          useValue: events,
        },
      ],
    };
  }
}
